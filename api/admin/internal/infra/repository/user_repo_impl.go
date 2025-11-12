package repository

import (
	"context"

	"github.com/qhai-dev/panda/admin/internal/domain/entity"
	"github.com/qhai-dev/panda/admin/internal/domain/repository"
	"gorm.io/gorm"
)

type UserRepositoryImpl struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) repository.UserRepository {
	return &UserRepositoryImpl{
		db: db,
	}
}

func (r *UserRepositoryImpl) CreateUser(ctx context.Context, user *entity.User) (userID int64, err error) {
	return 1, nil
}

func (r *UserRepositoryImpl) UpdateUser(ctx context.Context, user *entity.User) (userID int64, err error) {
	return 1, nil
}

func (r *UserRepositoryImpl) DeleteUser(ctx context.Context, userID int64) (err error) {
	return nil
}

func (r *UserRepositoryImpl) GetUserByID(ctx context.Context, userID int64) (user *entity.User, err error) {
	return &entity.User{}, nil
}

func (r *UserRepositoryImpl) GetUserList(ctx context.Context) (users []*entity.User, err error) {
	user := &entity.User{
		UserID: 1,
	}
	userList := []*entity.User{user}
	return userList, nil
}

func (r *UserRepositoryImpl) GetPaginationUserList(ctx context.Context, keyword string, offset, limit int) (users []*entity.User, total int, err error) {
	user := &entity.User{
		UserID: 1,
	}
	userList := []*entity.User{user}
	return userList, 100, nil
}

func (r *UserRepositoryImpl) FindUser(ctx context.Context, accountID string) (user *entity.User, err error) {
	return &entity.User{
		UserID: 1,
	}, nil
}
