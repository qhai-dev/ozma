package grpc

import (
	"context"
	"net"

	"google.golang.org/grpc"
)

type ServerOptions func(*Server)

type Server struct {
	grpcSrv          *grpc.Server
	network          string
	address          string
	lis              net.Listener
	context          context.Context
	middleware       []grpc.UnaryServerInterceptor
	streamMiddleware []grpc.StreamServerInterceptor
}

func Network(network string) ServerOptions {
	return func(s *Server) {
		s.network = network
	}
}

func Address(address string) ServerOptions {
	return func(s *Server) {
		s.address = address
	}
}

func Middleware(in ...grpc.UnaryServerInterceptor) ServerOptions {
	return func(s *Server) {
		// s.middleware = in
		// s.unaryMiddleware = in
	}
}

func StreamMiddleware(in ...grpc.StreamServerInterceptor) ServerOptions {
	return func(s *Server) {
		s.streamMiddleware = in
	}
}

func NewServer(opts ...ServerOptions) *Server {
	srv := &Server{
		network: "tcp",
		address: ":0",
		context: context.Background(),
	}

	for _, o := range opts {
		o(srv)
	}

	grpcOpts := []grpc.ServerOption{
		grpc.ChainUnaryInterceptor(srv.middleware...),
		grpc.ChainStreamInterceptor(srv.streamMiddleware...),
	}

	srv.grpcSrv = grpc.NewServer(grpcOpts...)

	return srv
}

func (s *Server) Listen() error {
	lis, err := net.Listen(s.network, s.address)
	if err != nil {
		return err
	}
	s.lis = lis
	return nil
}

func (s *Server) Server(ctx context.Context) error {
	if err := s.Listen(); err != nil {
		return err
	}

	err := s.grpcSrv.Serve(s.lis)
	if err != nil {
		return err
	}

	return nil
}

func (s *Server) Shutdown(ctx context.Context) error {
	return nil
}
