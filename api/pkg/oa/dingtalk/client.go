package dingtalk

type DingTalk struct {
	Conf
}

type Conf struct {
	AppID     string
	AppSecret string
}

func NewDingtalkClient() {

}
