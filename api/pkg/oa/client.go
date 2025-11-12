package oa

import (
	"context"
	"fmt"
)

type Platform string

const (
	Dingtalk Platform = "dingtalk"
	Feishu   Platform = "feishu"
	Weixin   Platform = "weixin"
)

type Conf struct {
	// TODO
}

type Client interface {
	GetAccessToken(ctx context.Context) (string, error)
	// TODO
}

func NewClient(platform Platform, conf Conf) (Client, error) {
	switch platform {
	case Dingtalk:
		return nil, nil
	case Feishu:
		return nil, nil
	case Weixin:
		return nil, nil
	default:
		return nil, fmt.Errorf("platform %s not supported", platform)
	}
}
