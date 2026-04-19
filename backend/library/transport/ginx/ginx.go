package ginx

import (
	"context"
	"time"
)

func NewServer(opts ...ServerOptions) *Server {
	srv := &Server{
		network: "tcp",
		address: ":0",
		timeout: 1 * time.Second,
	}

	for _, o := range opts {
		o(srv)
	}
	return srv
}

func (s *Server) Server(ctx context.Context) error {
	return nil
}

func (s *Server) Shutdown(ctx context.Context) error {
	return nil
}
