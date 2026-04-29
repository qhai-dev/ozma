package main

import "github.com/qhai-dev/galio/library/galio"

func main() {
	app := galio.New(
		galio.Name("rest-acctoun-server"),
		galio.Version("1.0.0"),
		galio.Server(),
		galio.Registry(),
	)
	app.Run()
}
