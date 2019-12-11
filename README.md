## 使用
### 客户端渲染开发
``` 
   npm run dev 
```

### 服务端渲染开发
```
    npm start    // 客户端代码修改后自动编译，目前需要刷新浏览器生效
```

### 生成环境构建
```
    npm run build  // 服务端渲染部署时先执行编译 dist目录下将创建client目录
```

### 开发调试  
- 客户端渲染   localhost:8080/with-react
- 服务端渲染  localhost:8001/with-react


## 高级配置
```
    prefixCDN:'/',
    prefixRouter: '', //页面路由前缀 默认/pagename  添加后前缀后访问方式为 /${prefixRouter}/pagename
    ssr: true, // 是否全局关闭服务端渲染
    ssrCache: true, // 是否全局使用服务端渲染缓存 第一次ssr,再次采用缓存，适用与存静态资源或者所有人访问的页面都是一样的工程
    statiPages: [], // 纯静态页面 执行一次服务端渲染，之后采用缓存html
    ssrIngore: null or new RegExp() // 指定某一个或者多个page项目不采用服务端渲染

```

## 静态资源CDN部署
```
## config/hmbird.config.js
module.exports = {
       prefixCDN:'xxx.cnd.com.cn/hmbird/'  
}
// 设置成这的时候，生成环境构建时npm run build会自动在引用js,css,img前缀前添加cdn地址
```


## 项目静态资源导出
```
npm run build with-react // 必须先执行构建输出 静态资源目录存放于 dist/client/with-react目录下
npm run output with-react   // 最终输出的html资源存放于 _output目录下
```


## 自定义webpack
样式默认支持scss,css,less
脚本支持js,jsx以及默认集成url-loader
```
// webpack.config.js
'use strict';
process.env.NODE_ENV = 'development'; //设置当前环境
var optimist = require('optimist');
var cateName = optimist.argv.cate || 0; //0 来源entry构建
let { getDevconfig } = require('hmbird/lib/webpack/devconfig');

let config = getDevconfig(cateName);
module.exports = config;



// package.json
"script":{
    "dev": "webpack-dev-server  --progress --colors --cate",
}


//  webpack.config.build.js
'use strict';
process.env.NODE_ENV = 'production'; //设置当前环境
var optimist = require('optimist');
var cateName = optimist.argv.cate || 0; //0 来源entry构建
let { getProconfig } = require('hmbird/lib/webpack/proconfig');

let config = getProconfig(cateName, true);
module.exports = config;


// package.json
"script":{
    "build": "webpack --config webpack.config_build.js -p  --cate",
}

```
