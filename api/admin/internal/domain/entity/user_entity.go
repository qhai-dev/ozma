package entity

import "time"

type User struct {
	UserID       int64     // 用户ID
	Account      string    // 账号
	AvatarURL    string    // 用户头像
	NickName     string    // 昵称
	HashPassword string    // 哈希密码
	Phone        string    // 手机号
	Email        string    // 邮箱
	Groups       []int64   // 关联用户组
	Rules        []int64   // 关联角色
	Units        []int64   // 关联单位
	CreatedAt    time.Time // 创建时间
	UpdatedAt    time.Time // 更新时间
}
