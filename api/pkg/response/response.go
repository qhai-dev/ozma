package response

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Response struct {
	Data  any    `json:"data"`
	Error string `json:"error"`
}

func Success(c *gin.Context, data any) {
	c.JSON(http.StatusOK, Response{
		Data: data,
	})
}

func Error(c *gin.Context, error string) {
	c.JSON(http.StatusInternalServerError, Response{
		Error: error,
	})
}

func UnauthorizedError(c *gin.Context, error string) {
	c.JSON(http.StatusUnauthorized, Response{
		Error: error,
	})
}

func ForbiddenError(c *gin.Context, err string) {
	c.JSON(http.StatusForbidden, Response{
		Error: err,
	})
}

func ValidationError(c *gin.Context, error string) {
	c.JSON(http.StatusBadRequest, Response{
		Error: error,
	})
}
