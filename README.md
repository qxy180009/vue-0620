# This is a project of orders 

## Please take a good look at it

### This programs have the sense of humor (Changes!)

## [主流开源协议之间的区别]
(https://www.zhihu.com/question/19568896)

## 用传统的方式把修改后的代码上传到GitHub

1. git add . 
2. git commit -, "提交信息"
3. git push

## 制作首页中的App组件
1. 完成 Header 区域, 使用的是Mint-UI 中的Header组件
2. 制作底部的Tabbar区域, 使用的是MUI的Tabbar.html
 + 先把扩展图标 css样式时, 拷贝到项目中
 + 拷贝 扩展字体库 ttf文件 到项目中去
 + 为购物车 小图标, 添加如下样式, `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在中间区域放置一个router-view来展示路由的组件

## 改造 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar 中的路由连接,展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据, 如何获取, 使用vue-resource
2. 使用 vue-resource 的 this.$http.get获取数据
3. 获取的数据保存到data身上
4. 使用v-for渲染每个item项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
1. 绘制页面: 使用mui中的media list
2. 使用vue-resource 获取数据
3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转
1. 列表中每一项 router-link ，跳转时提供唯一的ID
2. 创建新闻详情 组件页面, NewsInfo.vue
3. 在 路由模块中 将新闻详情 路由地址和 组件页面 对应起来

## 实现 新闻详情 的页面布局 和 数据渲染

## 单独封装一个 comment.vue 评论子组件
1. 先创建一个 单独的 comment.vue 组件模板
2. 在需要使用 comment组件 页面中 先动手 导入一个comment组件
 + `import comment from './comment.vue'`
3. 在父组件中, 使用`components`属性, 将刚才导入 comment 组件, 注册为自己的子组件
4. 将注册子组件时候的, 注册名称 以标签形式，在页面中 引用即可

## 获取所有的评论 显示到页面中
1. getComments

## 实现点击加载更多 评论的功能
1. 为加载更多按钮, 绑定点击事件, 在事件中, 请求 下一页数据
2. 点击加载更多, 让 pageIndex++, 然后重新调用this.getComments() 方法 获取新一页的数据
3. 为了防止新数据覆盖老数据 点击加载更多时， 每当获得新数据的时候 数组的concat方法 拼接新老数据

## 发表评论
1. 把文本框 做双向数据绑定
2. 为发表按钮绑定一个事件
3. 如果评论为空, Toast提示用户
4. 通过vue-resource发送一个请求, 把评论内容提交给服务器
5. 当发表评论OK后, 重新刷新列表, 以查看最新的评论
 + 如果调用 getComments 方法 重新刷新评论列表的话, 可能只能得到最后一页的评论, 前几页的评论无法获得
 + 另一种思路: 当评论成功后, 客户端手动拼接出一个 最新的评论对象, 然后 调用数组的 unshift方法 把最新的评论追加到 data 中comments的开头, 这样就能完美实现刷新评论列表的功能

## 改造图片分析格式 按钮 为路由链接并显示 对应的组件页面

## 绘制 图片列表 组件页面结构并 美化样式
1. 制作顶部的滑动条
2. 制作底部的图片列表

## 制作顶部滑动条的坑:
1. 需要借助MUI的 tab-top-webview-main.html
2. 需要去掉slider中的mui-fullscreen类
3. 滑动条 无法正常触发滑动, 通过检查官方文档,发现这个是JS组件, 需要初始化:
 + 导入 mui.js
 + 调用官方的样式 去初始化:
 ```
 mui(".mui-scroll-wrapper").scroll({
     deceleratio: 0.0005 // flick 减速系数, 系数越大, 滚动速度月满, 滚动距离越小, 默认值 0.0006
 });
 ```
4. 我们在初始化 滑动条的时候导入了 mui.js，控制台报错, 
    + guess: mui.min.js中用到了caller, callee, arguments 不符合严格模式, 冲突了
    + 解决方案: 1. 修改 非严格的代码
               2.  禁用严格模式
    + 最终选择了 2 使用了插件
    babel-plugin-transform-remove-strict-mode
5. 刚进入 图片分享页面的时候, 滑动条无法正常工作的问题解决了, 如果要初始化滑动条, 需要等到DOM元素加载完毕之后, 我们将初始化 滑动条的代码 转移到了 mounted函数中
6. 滑动条调试ok后, tabbar无法正常工作, 我们需要把每个tabbar按钮样式的 `mui-tab-item`改名字;
7. 获取所有分类 并渲染分类列表

### 制作图片列表区域
1. 图片列表需要使用懒加载技术, 使用Mint-UI 提供的 组件 `lazy-load`
2. 根据 `lazy-load`的使用文档, 尝试使用
3. 渲染图片列表数据

### 实现了 图片列表的 懒加载改造 和样式美化

## 实现了 点击图片 跳转到 图片详情页面
1. 在 改造 li成router-link时, 需要使用tag属性 指定渲染为哪种 元素

## 实现详情页面的布局 美化, 渲染页面


## 实现图片详情中的缩略图
1. 使用 插件 vue-preview 这个缩略图 插件
2. 获取所有的图片列表, 使用 v-for指令渲染数据
3. img的class属性不能去掉
4. 每个数据对象要有w和h属性

## 绘制商品咧白哦 页面基本结构

## 尝试在手机上 进行项目的预览和测试
1. 要保证手机正常运行
2. 保证手机和电脑处于同一个WIFI， 互相访问IP
3. 打开自己的项目中 package.json文件, 在dev脚本中添加 --host指令, 把当前电脑的主机IP设置为 --host的指令值;
4. cmd ipconfig 查看wifi ip 
 + 最终 通过手机开通个人热点 实现功能
