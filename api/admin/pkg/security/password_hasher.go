package security

import "golang.org/x/crypto/bcrypt"

type PasswordHasher struct {
	cost int
}

func NewPasswordHasher() *PasswordHasher {
	return &PasswordHasher{
		cost: bcrypt.DefaultCost,
	}
}

func (p *PasswordHasher) Hash(password string) (string, error) {
	bytes, err := bcrypt.GenerateFromPassword([]byte(password), p.cost)
	if err != nil {
		return "", err
	}
	return string(bytes), err
}

func (p *PasswordHasher) Compare(hashPassword, password string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashPassword), []byte(password))
}
