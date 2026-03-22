package entity

type Department struct {
	ID                 int64  // 部门ID
	Name               string // 部门名称
	ParentDepartmentID int64  // 父部门ID
	Status             bool   // 部门状态
	HasChildren        bool   // 是否有子部门
}
