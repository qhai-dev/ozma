package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/qhai-dev/panda/admin/internal/application"
	"github.com/qhai-dev/panda/admin/internal/application/command"
	"github.com/qhai-dev/panda/pkg/response"
)

type LoginHandler struct {
	loginService *application.LoginService
}

func NewLoginHandler(loginService *application.LoginService) *LoginHandler {
	return &LoginHandler{
		loginService: loginService,
	}
}

func (s *LoginHandler) Login(ctx *gin.Context) {

	var request command.LoginCommand

	if err := ctx.ShouldBindJSON(&request); err != nil {
		response.Error(ctx, err.Error())
		return
	}

	s.loginService.Login(ctx)

	response.Success(ctx, gin.H{
		"login": "success",
	})
}
