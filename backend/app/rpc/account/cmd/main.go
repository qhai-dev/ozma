package main

import (
	"fmt"

	"github.com/qhai-dev/galio/library/galio"
)

func main() {
	app := galio.New(
		galio.Name("rpc-account-server"),
		galio.Version("1.0.0"),
		galio.Server(),
		galio.Registry(),
	)

	// grpc/serveri/account
	// http/account
	// admin/account

	fmt.Printf("test app new %s", app.GetName())
}
