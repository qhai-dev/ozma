package handler

type APIHandler struct {
	LoginHandler *LoginHandler
}

func NewAPIHandler(
	loginHandler *LoginHandler,
) *APIHandler {
	return &APIHandler{
		LoginHandler: loginHandler,
	}
}
