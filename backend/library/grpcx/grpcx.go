package grpcx

import (
	"context"
	"net"

	"google.golang.org/grpc"
)

type Server struct {
	opts   []grpc.ServerOption
	ctx    context.Context
	cancel context.CancelFunc
}

func New(opt ...grpc.ServerOption) *Server {
	ctx, cancel := context.WithCancel(context.Background())

	return &Server{
		opts:   opt,
		ctx:    ctx,
		cancel: cancel,
	}
}

func (s *Server) Start() {
	lis, err := net.Listen("tcp", "127.0.0.1:2379")
	if err != nil {

	}

	grpcServer := grpc.NewServer(s.opts...)
	err = grpcServer.Serve(lis)
	if err != nil {

	}
}

func (s *Server) Stop() {

}
