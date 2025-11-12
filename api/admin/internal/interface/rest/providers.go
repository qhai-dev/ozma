package rest

import (
	"github.com/google/wire"
	"github.com/qhai-dev/panda/admin/internal/interface/rest/handler"
)

var ProviderSet = wire.NewSet(
	handler.NewLoginHandler,
	handler.NewAPIHandler,
	NewRouter,
	NewServer,
)
