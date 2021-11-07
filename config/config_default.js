/**
 * 默认配置
 * 请复制一份重命名为config.js
 * 然后填写配置信息
 */
let config = {
  //qq账号 密码
  account: {
    qq:  "",
    pwd: "",
  },

  //redis配置
  redis: {
    host: "127.0.0.1",//redis地址
    port: 6379,       //redis端口
    password: '',     //redis密码，没有密码可以为空
    db: 0,            //redis数据库
  },

  //群设置 
  group:{
    //通用默认配置
    'default':{

      //米游社信息查询
      mysDayLimit: 10,   //每天查询次数
      mysUidLimit: 5,    //每天查询uid个数

      disable:[],        //禁用功能 'gacha','mysInfo',
    },

    //每个群的单独配置(用于覆盖通用配置)
    // '123456':{
    //   //米游社信息查询
    //   mysDayLimit: 5, //每天查询次数
    //   mysUidLimit: 3, //每天查询uid个数
    // }
  },

  //米游社cookies，支持多个
  //访问米游社原神社区，登录后账户点击 F12 ，
  //选中 Console 或控制台，输入 document.cookie ，回车即可获取
  //例如ltoken=***;ltuid=***;
  //cookie逻辑：一个一天只能查30个uid（包括查询失败的），在没超过30的时候，之前查过的uid可以重复查询
  //所有项目限制一个cookie只能查27个，避免超出限制，查询过的可以重复查
  //
  mysCookies: [
    // "ltoken=***;ltuid=***",
    "",
  ],


};

export { config };
