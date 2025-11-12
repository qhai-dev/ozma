package service

import (
	"github.com/qhai-dev/panda/admin/internal/domain/repository"
	"github.com/qhai-dev/panda/pkg/database"
)

type UserServiceImpl struct {
	database       *database.Provider
	userRepository repository.UserRepository
}

func NewUserService(database *database.Provider, userRepository repository.UserRepository) *UserServiceImpl {
	return &UserServiceImpl{
		database:       database,
		userRepository: userRepository,
	}
}
