package transport

import "context"

type Server interface {
	Server(ctx context.Context) error
	Stop(ctx context.Context) error
}
