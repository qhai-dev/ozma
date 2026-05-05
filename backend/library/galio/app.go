package galio

import (
	"context"
)

type App struct {
	ctx    context.Context
	cancel context.CancelFunc
}

func New() *App {
	ctx, cancel := context.WithCancel(context.Background())

	return &App{
		ctx:    ctx,
		cancel: cancel,
	}
}

func (a *App) Run() {
	NewConfLoad()
	NewRestServer()
	NewRPCServer()
}
