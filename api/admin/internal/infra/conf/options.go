package conf

type Config struct {
	Server   `yaml:"server"`
	Database `yaml:"database"`
	Logger   `yaml:"logger"`
}

type Server struct {
	Rest struct {
		Addr    string `yaml:"addr"`
		Timeout int    `yaml:"timeout"`
	} `yaml:"rest"`
}

type Database struct {
	Mysql struct {
		DNS string `yaml:"dns"`
	} `yaml:"mysql"`
}

type Logger struct {
	Level uint32 `yaml:"level"`
}
