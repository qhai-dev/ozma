package main

import (
	"os"

	"github.com/qhai-dev/nextadm/cmd/user/app"
)

func main() {
	run := app.NewUserServer()
	code := run()
	os.Exit(code)
}
