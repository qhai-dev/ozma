package app

import (
	"context"

	"github.com/qhai-dev/kubun/library/transport"
)

type Option func(o *options)

type options struct {
	name    string
	version string
	context context.Context
	server  transport.Server
}

func Name(name string) Option {
	return func(o *options) {
		o.name = name
	}
}

func Version(version string) Option {
	return func(o *options) {
		o.version = version
	}
}

func Server(server transport.Server) Option {
	return func(o *options) {
		o.server = server
	}
}
