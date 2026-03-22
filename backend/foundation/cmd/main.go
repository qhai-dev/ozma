package main

import (
	"fmt"
	"net"

	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", "localhost:8002")
	if err != nil {
		fmt.Printf("listen error: %v\n", err)
		return
	}
	s := grpc.NewServer()

	if err := s.Serve(lis); err != nil {
		fmt.Printf("serve error: %v\n", err)
	}
}

/**
 *
 * foundation 服务需要做的事情是哪些
 *  1. 对接 飞书 钉钉的组织架构的数据 同步
 *  2.
 */
