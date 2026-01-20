# ozma backend



同步 第三方 OA 用户/组织架构
1. 飞书 TODO



基础功能

1. 组织架构
1.1 成员管理  -> table user
1.2 部门管理  -> table department
1.3 角色管理  -> table role
1.4 单位管理  -> table  unit
1.5 用户组管理  -> table user_group

3. 用户信息
3.1 用户详情 -> table user_profile
3.2 偏好设置 -> table user_setting

# enterprise

- 支持同步 钉钉/飞书/企业微信 用户体系
- 基于 Casbin 实现 RBAC / ABAC 权限体系


/**
  工作空间 功能
	  1. 组织架构
				1.1 成员与部门
				1.2 角色管理
				1.3 单位管理
				1.4 用户组管理
		2. 空间设置
				2.2 管理员权限
				2.3 组织架构数据同步
*/
