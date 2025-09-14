package main

import (
	"os"

	"github.com/qhai-dev/nextadm/cmd/auth/app"
)

func main() {
	run := app.NewAuthServer()
	code := run()
	os.Exit(code)
}
