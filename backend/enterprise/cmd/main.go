package main

import (
	"fmt"
	"net"

	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", "localhost:8001")
	if err != nil {
		fmt.Printf("listen error: %v\n", err)
		return
	}

	s := grpc.NewServer()

	if err = s.Serve(lis); err != nil {
		fmt.Printf("serve error: %v\n", err)
	}
}

/**
 * enterprise 服务
 * 1. 实现 企业（租户）的增删改查逻辑
 */
