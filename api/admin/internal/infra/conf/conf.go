package conf

import (
	"log"
	"time"

	"github.com/spf13/viper"
	_ "github.com/spf13/viper/remote"
)

func Load() *Config {
	cfg := &Config{}
	
	v := viper.New()
	err := v.AddRemoteProvider("consul", "http://14.103.230.114:8500", "admin/config.yaml")
	if err != nil {
		log.Fatalf("consul remote provider error %v", err)
	}

	v.SetConfigType("yaml")
	err = v.ReadRemoteConfig()

	go func() {
		for {
			time.Sleep(10 * time.Second)
			err := v.WatchRemoteConfig()
			if err != nil {
				log.Printf("watch remote config error %v", err)
			}
		}
	}()

	return cfg
}
