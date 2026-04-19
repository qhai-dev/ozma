package transport

import "context"

type Server interface {
	Server(ctx context.Context) error
	Shutdown(ctx context.Context) error
}
