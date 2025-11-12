package infra

import (
	"github.com/google/wire"
	conf2 "github.com/qhai-dev/panda/admin/internal/infra/conf"
	"github.com/qhai-dev/panda/admin/internal/infra/repository"
	"github.com/qhai-dev/panda/pkg/database"
	"github.com/qhai-dev/panda/pkg/logger"
)

var ProviderSet = wire.NewSet(
	conf2.Load,
	NewLogger,
	database.NewDatabase,
	repository.NewUserRepository,
)

func NewLogger(conf *conf2.Config) *logger.Logger {
	return logger.NewLogger(conf.Logger.Level)
}
