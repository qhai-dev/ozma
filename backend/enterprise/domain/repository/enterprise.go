package repository

import "github.com/qhai-dev/ozma/enterprise/domain/entity"

type EnterpriseRepository interface {
	// FindByID returns an enterprise by its ID
	FindByID(id uint) (*entity.Enterprise, error)
	// FindAll returns all enterprises
	FindAll() ([]*entity.Enterprise, error)
	// Save saves an enterprise
	Save(enterprise *entity.Enterprise) error
	// Delete deletes an enterprise by its ID
	Delete(id uint) error
}
