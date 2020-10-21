module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },
    devServer: {
      open: true,  // npm run serve后自动打开页面
      host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
      port: 8080, // 开发服务器运行端口号
      // proxy: {
      //   '/api': {
      //      target: 'http://www.exaple.com', // 代理接口地址
      //      secure: false,  // 如果是https接口，需要配置这个参数
      //      changeOrigin: true, // 是否跨域
      //      pathRewrite: {
      //        '^/api': ''   //需要rewrite的, 这里理解成以'/api'开头的接口地址，把/api代替target中的地址
      //     }
      //   }
      // }
    },
  },
  // dev: {
  //   proxyTable: {
  //     '/api': {
  //         target: 'http://127.0.0.1:3000',//后端接口地址
  //         changeOrigin: true,//是否允许跨越
  //         pathRewrite: {
  //             '^/api': '/api',//重写,
  //         }
  //     }
  // },
  // }
};