//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"
	"github.com/qhai-dev/panda/admin/internal/application"
	"github.com/qhai-dev/panda/admin/internal/infra"
	"github.com/qhai-dev/panda/admin/internal/interface/rest"
)

func InitializeApp() (*App, error) {
	wire.Build(
		infra.ProviderSet,
		application.ProviderSet,
		rest.ProviderSet,
		NewApp,
	)
	return &App{}, nil
}

type App struct {
	RestServer *rest.Server
}

func NewApp(
	restServer *rest.Server,
) *App {
	return &App{
		RestServer: restServer,
	}
}
