package galio

import (
	"context"
)

type Option func(o *options)

type options struct {
	name    string
	version string
	ctx     context.Context
}

func Name(name string) Option {
	return func(o *options) {
		o.name = name
	}
}

func Version(version string) Option {
	return func(o *options) {
		o.version = version
	}
}

func Registry() Option {
	return func(o *options) {

	}
}

func Server() Option {
	return func(o *options) {

	}
}

type App struct {
	opts   options
	ctx    context.Context
	cancel context.CancelFunc
}

var defaultOptions = options{
	ctx: context.Background(),
}

func New(opts ...Option) *App {
	o := defaultOptions

	for _, opt := range opts {
		opt(&o)
	}

	ctx, cancel := context.WithCancel(o.ctx)

	return &App{
		opts:   o,
		ctx:    ctx,
		cancel: cancel,
	}
}

func (a *App) GetName() string {
	return a.opts.name
}

func (a *App) GetVersion() string {
	return a.opts.version
}

func (a *App) Run() {

}
