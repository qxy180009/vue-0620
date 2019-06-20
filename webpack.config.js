// 由于webpack基于Node进行构建, 所以， webpack配置文件中任何Node代码都是支持的
const path = require('path')

// 在内存中根据指定的模板页面 生成一份内存中的页面, 把自动打包好的bundle注入到页面的底部
// 如果要配置插件， 需要在导出的对象中挂载一个plugins
var htmlWebpackPlugin = require('html-webpack-plugin')

// 当命令行执行webpack或webpack-dev-server的时候,
// 工具会发现我们没有输入入口和出口文件, 就会检查项目根目录中的配置文件并读取此文件
// 进行打包构建
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'),
    output:{
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js' //输出的文件名
    },
    plugins: [ //所有的webpack插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件的路径
            filename: 'index.html' // 设置生成的内存页面的名称
        })
    ],
    module:{ //配置所有第三方loader模块的
        rules: [ // 第三方模块的匹配规则
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 处理css文件的loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, //处理less文件的loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}, //处理scss文件的loader
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 
                [
                    {
                        loader:'url-loader',
                        options:
                        {
                            limit:12124,
                            name:'[hash:8]-[name].[ext]'
                        },
                     }
                ]
            }, // 处理图片路径loader
            // limit给定的值是图片的大小, 单位是byte, 如果我们引用的图片大于或等于给定的limit,则不会被转为base64位的字符串, 如果图
            // 片小于给定的limit, 则会转化为base64字符串
            {test: /\.(ttf|eot|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件的loader
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, //配置
            // Babel转换高级到低级语法
            {test: /\.vue$/, use : 'vue-loader'} // 处理.vue文件的laoder
        ]
    },
    resolve:{
        alias:{ // 修改vue被导入时的路径
            // "vue$": "vue/dist/vue.js"
        }
    }

}