// 入口文件
import Vue from 'vue'
// 导入路由包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 2.1 导入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)

// 导入app根组件
import app from './app.vue'

// 导入MUI的样式
import  './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 1.3 导入自己的router.js路由模块
import router from './router.js'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router // 1.4 挂载路由对象到VM实例上
})