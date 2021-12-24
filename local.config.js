exports.devServer = {
  proxy: {
    '^/': {
      // target: 'http://192.168.237.189:8080', // 189测试环境
      // target: 'http://192.168.237.188:8098', // 188 测试环境
      // target: 'http://10.100.3.204:8080', // 179 测试环境
      // target: 'http://10.100.3.207:8080/', // 207 测试环境
      // target: 'http://192.168.240.61:8118',
      // target: 'http://192.168.254.185:8080',
      // target: 'http://ahhyzs.commu.gmtech.top', // 中山线上环境
      // target: 'http://njaosiboen.commu.gmtech.top', // 南京线上环境
      // target: 'https://horus.aiforward.cn', // 云端线上环境
      // target: 'http://tjxmy.commu.gmtech.top', // 天津线上环境
      target: 'http://rtspodhy.commu.gmtech.top', // 苏州线上环境
      // target: 'http://bjyztown.commu.gmtech.top', // 亦庄线上环境
      // target: 'http://xatest.commu.gmtech.top', // 金辉
      // target: 'http://horus.radiance.com.cn', // 金辉云端
      // target: 'http://yjweitang.commu.gmtech.top/', // 深圳愿景微棠
      // target: 'http://jinsejunyuan.commu.gmtech.top', // 昆明
      // target: 'http://jiangshanmingzhu.commu.gmtech.top', // 江山名著
      target: 'http://xuhuiyongsheng.commu.gmtech.top',
      changeOrigin: true,
      ws: false
    }
  }
}