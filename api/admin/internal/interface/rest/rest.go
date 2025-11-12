package rest

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/qhai-dev/panda/admin/internal/infra/conf"
	"github.com/qhai-dev/panda/pkg/logger"
)

type Server struct {
	conf    *conf.Config
	log     *logger.Logger
	handler *gin.Engine
}

func NewServer(conf *conf.Config, log *logger.Logger, h *gin.Engine) *Server {
	return &Server{
		conf:    conf,
		log:     log,
		handler: h,
	}
}

func (s *Server) Run() *http.Server {
	fmt.Println(s.conf.Server.Rest.Addr)

	srv := &http.Server{
		Addr:    ":8080",
		Handler: s.handler,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && !errors.Is(err, http.ErrServerClosed) {
			s.log.Fatal(errors.New("error"), "")
		}
	}()

	return srv
}
