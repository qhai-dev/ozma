//go:build wireinject
// +build wireinject

package main

import (
	"github.com/google/wire"
	"github.com/qhai-dev/kubun/service/account/application"
	"github.com/qhai-dev/kubun/service/account/infra"
	"github.com/qhai-dev/kubun/service/account/rpc"
)

func InitializeApp() {
	wire.Build(
		infra.Provider,
		application.Provider,
		rpc.Provider,
	)
}
