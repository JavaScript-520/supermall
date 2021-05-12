// 导出配置
module.exports = {
    //自定义脚手架webpack扩展配置
    configureWebpack: {
        resolve: {
            //后缀名省略模式，默认vue帮我们处理了js.css,html,vue。。。。
            //extensions: [],
            //设置自定义别名 注意引用时 关于引入图片src的链接需要在前面加 ~
            //如 <img src="~assets/imgs/tabbar/home.svg" alt="">
            alias: {
                assets: "@/assets",
                common: "@/common",
                components: "@/components",
                network: "@/network",
                views: "@/views"
            }
        }
    }
}
