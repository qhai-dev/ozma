package application

import (
	"github.com/google/wire"
	"github.com/qhai-dev/panda/admin/internal/application/command"
)

var ProviderSet = wire.NewSet(
	command.NewLoginHandler,
	ProvideLoginService,
)
