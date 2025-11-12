package application

import (
	"context"

	"github.com/qhai-dev/panda/admin/internal/application/command"
)

type LoginService struct {
	loginHandler *command.LoginHandler
}

func ProvideLoginService(
	loginHandler *command.LoginHandler,
) *LoginService {
	return &LoginService{
		loginHandler: loginHandler,
	}
}

func (s *LoginService) Login(ctx context.Context) {
	//
	//s.loginHandler.Handle(ctx)
}
