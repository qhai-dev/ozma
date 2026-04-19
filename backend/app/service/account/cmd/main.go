package main

import (
	"github.com/qhai-dev/kubun/library/app"
	"github.com/qhai-dev/kubun/library/transport/grpc"
)

func main() {
	srv := grpc.NewServer(
		grpc.Network("tcp"),
		grpc.Address("8080"),
	)

	app := app.New(
		app.Name("service/account"),
		app.Version("1.0.0"),
		app.Server(srv),
	)

	app.Run()
}
