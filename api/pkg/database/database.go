package database

import (
	"context"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type option struct {
	tx *gorm.DB
}

type Option func(opt *option)

type Provider interface {
	// NewSession 创建一个新的数据库会话
	NewSession(ctx context.Context, opts ...Option) *gorm.DB
	// Transaction 执行一个事务
	Transaction(ctx context.Context, fn func(tx *gorm.DB) error, opts ...Option) error
}

type provider struct {
	db *gorm.DB
}

func (p *provider) NewSession(ctx context.Context, opts ...Option) *gorm.DB {
	session := p.db
	opt := &option{}
	for _, fn := range opts {
		fn(opt)
	}
	if opt.tx != nil {
		session = opt.tx
	}

	return session.WithContext(ctx)
}

func (p *provider) Transaction(ctx context.Context, fn func(tx *gorm.DB) error, opts ...Option) error {
	session := p.NewSession(ctx, opts...)
	return session.Transaction(fn)
}

//var _ Provider = &provider{}

func NewDatabase() (*gorm.DB, error) {
	db, err := gorm.Open(mysql.Open("root:qwer1234@tcp(14.103.230.114:3306)/panda_admin?charset=utf8mb4&parseTime=True&loc=Local"))
	if err != nil {
		return nil, err
	}
	return db, nil
}
