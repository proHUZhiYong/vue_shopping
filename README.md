# 这是一个商城项目
1.加载数据 使用 vue-resource 的 $http.get 获取数据

## 改造九宫格 样式

## 改造新闻资讯链接

## 实现新闻资讯列表 跳转到详情

## 实现 评论功能  评论子组件 component.vue

## 发表评论 
1.文本框进行双向数据绑定
2.为发表按钮绑定事件
3.校验评论框内容是否为空，如果为空，则Toast提示用户 内容不能为空
4.v-resource 发送请求 把内容提交给服务器
5.当发表评论后重新刷新列表以查看最新评论
    如果用getComments方法重新刷新评论列表，可能只取到最后一页的评论前几页的评论获取不到
    所以在评论成功后在客户端手动拼接一个最新的评论对象，然后调用数组的unshift方法
    把最新的评论追加到data中comments的开头

## 图片分享页面
1.制作顶部的滑动条
2.制作底部图片列表
3.滑动条无法正常触发滑动 通过文档 发现 需要初始化
    +导入mui.js
    +调用官方 初始化控件方法
    
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
4. 初始化滑动控件 导入的 mui.js ，但是报错
Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    + 推测是 mui 中使用了 'caller', 'callee', and 'arguments'
    + 但是webpack 打包好的 bundle.js中 启用了严格模式（strict mode）所以冲突
    + 解决方案：
        + 1.把 mui 中 非严格 模式的 代码改掉 
        + 2.把webpack 打包时候的 严格模式禁用

    最后选择第二种方式 移除 webpack 严格模式
        + 安装插件 babel-plugin-transform-remove-strict-mode
5.但是 刚进入页面之后 滑动条无法 滚动 只有刷新之后才能滚动 这表示 mui组件 初始化时机不对 最早应该在 mounted生命周期 初始化才可以
6.当滑动条 调试好后 发现 tabbar 无法切换 这时候 需要把 tabbar按钮的 mui-tab-item 更改成其他名字 当然 样式也要重新设置 之后就可以了
7.获取所有分类 并渲染列表
