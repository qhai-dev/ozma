package command

import (
	"context"
	"errors"

	"github.com/qhai-dev/panda/admin/internal/domain/entity"
	"github.com/qhai-dev/panda/admin/internal/domain/repository"
	"github.com/qhai-dev/panda/pkg/logger"
)

var (
	Error = errors.New("请输入内容")
)

type LoginCommand struct {
	AccountID    string `form:"account_id" json:"account_id" binding:"required"`
	HashPassword string `form:"password" json:"password" binding:"required,md5"`
}

//type LoginResult struct {
//	User *entity.User
//}

type LoginHandler struct {
	repo   repository.UserRepository
	logger *logger.Logger
}

func NewLoginHandler(repo repository.UserRepository, logger *logger.Logger) *LoginHandler {
	return &LoginHandler{
		repo:   repo,
		logger: logger,
	}
}

func (h *LoginHandler) Handle(ctx context.Context, cmd LoginCommand) (*entity.User, error) {
	user, err := h.repo.FindUser(ctx, cmd.AccountID)
	// TODO

	if err != nil {
		return nil, err
	}

	return user, nil
}
