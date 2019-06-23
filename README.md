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

## 实现点击加载更多 评论的功能
1. 为加载更多按钮, 绑定点击事件, 在事件中, 请求 下一页数据
2. 点击加载更多, 让 pageIndex++, 然后重新调用this.getComments() 方法 获取新一页的数据
3. 为了防止新数据覆盖老数据 点击加载更多时， 每当获得新数据的时候 数组的concat方法 拼接新老数据
