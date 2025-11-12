package logger

import (
	"os"
	"sync/atomic"
	"time"

	"github.com/go-logr/logr"
	"github.com/go-logr/zapr"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

type Logger struct {
	log               logr.Logger
	Flush             func()
	SetVerbosityLevel func(uint32)
}

type runtime struct {
	v uint32
}

func (r *runtime) ZapV() zapcore.Level {
	return -zapcore.Level(atomic.LoadUint32(&r.v))
}

func (r *runtime) Enabled(level zapcore.Level) bool {
	return level >= r.ZapV()
}

func (r *runtime) SetVerbosityLevel(v uint32) {
	atomic.StoreUint32(&r.v, v)
}

func NewLogger(v uint32) *Logger {
	r := &runtime{
		v: v,
	}

	encoderConfig := &zapcore.EncoderConfig{
		NameKey:    "logger",
		MessageKey: "message",
		TimeKey:    "timestamp",
		EncodeTime: func(t time.Time, enc zapcore.PrimitiveArrayEncoder) {
			enc.AppendString(t.Format("2006-01-02 15:04:05"))
		},
		LevelKey: "level",
		EncodeLevel: func(level zapcore.Level, enc zapcore.PrimitiveArrayEncoder) {
			// 只设计 ERROR 和 INFO 两种日志
			// INFO 级别日志额外单独用v(n)去区分
			if level == zapcore.ErrorLevel {
				enc.AppendString(level.CapitalString())
			} else {
				enc.AppendString("INFO")
			}
		},
		// TODO INFO 日志是否需要 caller
		//CallerKey:     "caller",
		//EncodeCaller:  zapcore.ShortCallerEncoder,
		StacktraceKey: "stack",
	}

	encoder := zapcore.NewJSONEncoder(*encoderConfig)

	highPriority := zap.LevelEnablerFunc(func(lvl zapcore.Level) bool {
		return lvl >= zapcore.ErrorLevel && r.Enabled(lvl)
	})

	lowPriority := zap.LevelEnablerFunc(func(lvl zapcore.Level) bool {
		return lvl < zapcore.ErrorLevel && r.Enabled(lvl)
	})

	core := zapcore.NewTee(
		zapcore.NewCore(encoder, zapcore.Lock(zapcore.AddSync(os.Stderr)), highPriority),
		zapcore.NewCore(encoder, zapcore.Lock(zapcore.AddSync(os.Stdout)), lowPriority),
	)

	zapLog := zap.New(
		core,
		//zap.WithCaller(true),
		//zap.AddCallerSkip(1),
		zap.AddStacktrace(zapcore.ErrorLevel),
	)

	return &Logger{
		log:               zapr.NewLoggerWithOptions(zapLog, zapr.LogInfoLevel("v"), zapr.ErrorKey("error")),
		SetVerbosityLevel: r.SetVerbosityLevel,
		Flush: func() {
			_ = zapLog.Sync()
		},
	}
}

func (l *Logger) Info(msg string, keysAndValues ...any) {
	l.log.Info(msg, keysAndValues...)
}

func (l *Logger) Error(err error, msg string, keysAndValues ...any) {
	l.log.Error(err, msg, keysAndValues...)
}

func (l *Logger) Fatal(err error, msg string, keysAndValues ...any) {
	defer l.Flush()
	l.log.Error(err, msg, keysAndValues...)
	os.Exit(1)
}

func (l *Logger) V(v int) logr.Logger {
	return l.log.V(v)
}

func (l *Logger) FlushLog() {
	l.Flush()
}

func (l *Logger) SetLevel(v uint32) {
	l.SetVerbosityLevel(v)
}
