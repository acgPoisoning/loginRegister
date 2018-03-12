
# 用户中心

> A Vue.js project

### 进度

- 注册 -------- 完成 (校验、发送短信验证码倒计时模块化组件)
- 登录功能 -------- 完成 (登录验证功能、登录跳转页面)
- 用户中心 -------- 进行中 (路由拦截转登录页、二级路由嵌套、样式布局)
- 转账 -------- 进行中 (样式布局)
- 充值 -------- 进行中 (样式布局)
- 账单 -------- 进行中 (样式布局)

### mock数据方式改变

- 下载安装 json-server

> npm install -g json-server

- 在 `data.json` 文件夹地址下，启动 `json-server` 并告诉 `json-server` 监视data.json

> json-server --watch data.json

- 如果没有出现错误，我们看到`json-server`的Hom地址为`http://localhost:3000`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

