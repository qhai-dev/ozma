package app

import (
	"context"
	"fmt"
)

type App struct {
	options options
	context context.Context
	cancel  context.CancelFunc
}

func New(opts ...Option) *App {
	o := options{
		context: context.Background(),
	}

	for _, opt := range opts {
		opt(&o)
	}

	ctx, cancel := context.WithCancel(o.context)
	return &App{
		options: o,
		context: ctx,
		cancel:  cancel,
	}
}

func (a *App) Name() string {
	return a.options.name
}

func (a *App) Version() string {
	return a.options.version
}

func (a *App) Run() {
	fmt.Println(a.options.name)
	// TODO:
}
