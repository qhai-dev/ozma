FROM golang:1.25.4-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git gcc libc-dev

COPY admin/go.mdo admin/go.sum ./
RUN go mod download


COPY admin/ ./

RUN go build -ldflags="-s -w" -o /app/admin main.go

FROM alpine:3.22.0

WORKDIR /app

COPY --from=builder /app/admin /app/admin

EXPOSE 8888

CMD [ "/app/admin" ]