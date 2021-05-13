<template>
  <!--主程序界面-->
  <div id="app">
    <!--路由跳转显示页-->
    <router-view></router-view>
    <!--导航栏组件-->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
//导入TabBar导航栏组件
import MainTabBar from "./components/content/tabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import url("assets/css/base.css");
</style>
