//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"
	"github.com/qhai-dev/galio/rpc/account/application"
	"github.com/qhai-dev/galio/rpc/account/infra"
	"github.com/qhai-dev/galio/rpc/account/rpc"
)

func InitializeApp() {
	wire.Build(
		infra.Provider,
		application.Provider,
		rpc.Provider,
	)
}
