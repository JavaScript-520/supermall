// 导入系统模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 注册模块
Vue.use(VueRouter)

//导入组件模块懒加载
const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
const ShopCart = () => import("../views/shopCart/ShopCart")

//路由表
const routes = [
  //默认路径
  {
    path: "/",
    redirect: "/home"
  },
  //首页路由
  {
    path: "/home",
    component: Home,
  },
  //分类路由
  {
    path: "/category",
    component: Category,
  },
  //购物车路由
  {
    path: "/shopCart",
    component: ShopCart,
  },
  //我的 路由
  {
    path: "/profile",
    component: Profile,
  }
]

//创建路由信息并导出
export default new VueRouter({
  routes,
  mode: 'history'  // 去除URL上的 # 号
})
