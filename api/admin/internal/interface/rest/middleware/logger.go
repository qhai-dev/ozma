package middleware

import (
	"time"

	"github.com/gin-gonic/gin"
	"github.com/qhai-dev/panda/pkg/logger"
)

func Logger(log *logger.Logger) gin.HandlerFunc {
	return func(c *gin.Context) {
		start := time.Now()

		path := c.Request.URL.Path
		query := c.Request.URL.RawQuery
		body := c.Request.PostForm
		method := c.Request.Method
		status := c.Writer.Status()
		ip := c.ClientIP()

		c.Next()

		latency := time.Since(start)

		log.Info(
			"request",
			"method", method,
			"path", path,
			"query", query,
			"body", body,
			"ip", ip,
			"status", status,
			"latency", latency.String(),
		)

		//log.V(1).WithValues()

	}
}
