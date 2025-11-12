package rest

import (
	"github.com/gin-gonic/gin"
	"github.com/qhai-dev/panda/admin/internal/interface/rest/handler"
	"github.com/qhai-dev/panda/admin/internal/interface/rest/middleware"
	"github.com/qhai-dev/panda/pkg/logger"
)

func NewRouter(h *handler.APIHandler, log *logger.Logger) *gin.Engine {
	r := gin.New()

	r.Use(middleware.Cors())
	r.Use(middleware.Logger(log))

	root := r.Group("/api/admin")
	root.POST("/login", h.LoginHandler.Login)

	{
		v1 := root.Group("/v1")
		v1.Use(middleware.Session())
		{
			v1.POST("/user", h.LoginHandler.Login)
		}
	}

	{
		// TODO v2 api
	}

	return r
}
