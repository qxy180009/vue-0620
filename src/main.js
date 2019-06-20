// 入口文件
import Vue from 'vue'

// 导入app根组件
import app from './app.vue'

// 导入MUI的样式
import  './lib/mui/css/mui.min.css'

import MintUI from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(MintUI)

var vm = new Vue({
    el: '#app',
    render: c => c(app)   
})