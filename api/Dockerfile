FROM golang:1.24.1-alpine AS base
WORKDIR /app
COPY go.mod go.sum ./
ENV GOPROXY=https://goproxy.io,direct
RUN go mod download


FROM base AS builder
WORKDIR /app
COPY . .
ENV CGO_ENABLED=0 GOOS=linux
RUN go build  -ldflags="-s -w" -o server ./cmd/apiserver/main.go


FROM base AS runner
WORKDIR /app

RUN adduser --system --uid 1001 apiserver

COPY --from=builder /app/server .

USER apiserver

EXPOSE 8080

ENV PORT=8080

ENV HOSTNAME="0.0.0.0"
CMD ["./server"]
