package main

import (
	"github.com/qhai-dev/galio/library/grpcx"
)

func main() {
	app := grpcx.New()
	defer app.Stop()

	app.Start()
}
