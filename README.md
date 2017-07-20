# app

> A Vue.js project

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

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

//安装jsx
npm install babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx babel-helper-vue-jsx-merge-props  --save-dev

//vue 全家桶 vue vuex vue-rooter webpack

//vuex 主要包括 state getter mutation(mtation-types 常量表示mutation) action module

1）state中放数据
2）getter可按一定方式获取state中数据，在compnent中通过 this.$store.state.DocLib(名称).activeName(state数据名称) 
3）mutation唯一可改变state数据的方式，只能同步更改，不支持异步
4）action函数，可通过commit触发mutation改变state数据(commit(mutation名，参数obj))，逻辑处理部分，支持异步。在component中通过this.$store.dispatch(action名，参数obj)，注意只支持传入一个obj对象，将所需变量全部添加到obj中
5）module将 store 分割到模块


//网址
vue:          https://cn.vuejs.org/
vuex:https:   http://vuex.vuejs.org/zh-cn/
vue-router:   http://router.vuejs.org/zh-cn/
webpack:http: http://www.css88.com/doc/webpack2/guides/development/