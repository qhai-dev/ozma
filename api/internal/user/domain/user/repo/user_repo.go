package repo

import (
	"context"

	"github.com/qhai-dev/nextadm/internal/user/domain/user/entity"
)

type UserRepo interface {
	CreateUser(ctx context.Context, user *entity.User) (userID int, err error)
}

// TODO
