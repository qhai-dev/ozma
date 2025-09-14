package main

import (
	"os"

	"github.com/qhai-dev/nextadm/cmd/apiserver/app"
)

func main() {
	run := app.NewAPIServer()

  code := run()

	os.Exit(code)
}
