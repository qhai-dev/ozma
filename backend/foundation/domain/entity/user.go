package entity

type User struct {
	ID            int64    // 用户ID
	Name          string   // 用户名
	Email         string   // 邮箱
	HashPassword  string   // 密码哈希
	Gender        string   // 性别
	Avatar        string   // 头像
	DepartmentIDS []string // 部门
	Status        bool     // 状态
}
