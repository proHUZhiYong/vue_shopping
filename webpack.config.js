//由于webpakc 是基于 node 够贱的 所以 webapck 的配置文件中，
//任何合法的node 代码都是支持的
var path = require('path')
//在内存中根据指定的模板页面，生成一个在内存中的页面，同时自动把
//打包好的bundle.js注入到页面底部
//如需要配置插件，需要在导出的对象中 注入一个 plugins 节点
var htmlWebackPlugin = require('html-webpack-plugin')

// vue-loader v15 需要 配置插件 才能使用
var VueLoaderPlugin = require('vue-loader/lib/plugin')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// module.exports = {
//   // ...
//   plugins: [
//     new VueLoaderPlugin()
//   ]
// }

//当以命令形式运行 webpack 或webpack-dev-server 的时候，
//工具会发现我们并没有要提供要打包的文件的入口和出口文件，
//此时它会检查项目根目录中的配置文件，并读取这个文件，
//就拿到了到处的这个配置对象，然后根据这个对象进项打包
module.exports = {
	entry:path.join(__dirname,'./src/main.js'),//入口文件
	output:{
		path:path.join(__dirname,'./dist'),//输出路径
		filename:'bundle.js'//指定 输出文件的名称
	},
	plugins:[
		//所有webapack 插件的配置节点

		new htmlWebackPlugin({
			template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
			filename:"index.html" //设置生成内存页面的名称
		})
		,
		new VueLoaderPlugin()
	],
	module:{
		rules:[
			//第三方模板匹配规则
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			//处理图片路径的loader  
			//参数 ?limit= 值为图片字节大小 只有大于图片字节才会进行base64编码 <=不进行编码
			//参数name= [name]打包后的图片名称不变  .[ext]后缀名不变
			//图片名称不变  .[ext]后缀名不变 一样的 并且都  不进行编码的时候 最后一张一样的会覆盖之前的图片
			//解决这个问题 可以name 面前放一个hash值 [hash:8] 8位hash 值
			{test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=150000&name=[hash:8]-[name].[ext]'},
			//处理字体文件的loader
			{test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel 来转换 高级的语法
			{test:/\.vue$/,use:'vue-loader'}//处理.vue 文件的loader
		]
	},
	resolve:{
		alias:{//修改 vue 被导入的时候包的路径
			// "vue$":"vue/dist/vue.js"
		}
	}
}