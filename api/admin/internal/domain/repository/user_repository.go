package repository

import (
	"context"

	"github.com/qhai-dev/panda/admin/internal/domain/entity"
)

type UserRepository interface {
	CreateUser(ctx context.Context, user *entity.User) (userID int64, err error)
	UpdateUser(ctx context.Context, user *entity.User) (userID int64, err error)
	DeleteUser(ctx context.Context, userID int64) (err error)
	GetUserByID(ctx context.Context, userID int64) (user *entity.User, err error)
	GetUserList(ctx context.Context) (users []*entity.User, err error)
	GetPaginationUserList(ctx context.Context, keyword string, offset, limit int) (users []*entity.User, total int, err error)
	FindUser(ctx context.Context, accountID string) (user *entity.User, err error)
}
