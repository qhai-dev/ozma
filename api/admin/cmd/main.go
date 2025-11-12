package main

import (
	"context"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	app, err := InitializeApp()
	if err != nil {
		log.Fatal(err)
	}

	restServer := app.RestServer.Run()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	err = restServer.Shutdown(ctx)
	if err != nil {
		log.Fatal(err)
	}
}
