package ginx

import "time"

type ServerOptions func(*Server)

type Server struct {
	// *http.Server
	network string
	address string
	timeout time.Duration
}

func WithNetwork(network string) ServerOptions {
	return func(s *Server) {
		s.network = network
	}
}

func WithAddress(address string) ServerOptions {
	return func(s *Server) {
		s.address = address
	}
}

func WithTimeout(timeout time.Duration) ServerOptions {
	return func(s *Server) {
		s.timeout = timeout
	}
}
