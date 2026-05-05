package galio

import (
	"google.golang.org/grpc"
)

func NewRPCServer() *grpc.Server {
	s := grpc.NewServer()

	return s
}
