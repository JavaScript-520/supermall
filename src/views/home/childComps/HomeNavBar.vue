<template>
  <!--调用首页导航栏组件  引入组件时在当前组件设置样式-->
  <nav-bar class="home-nav">
    <!--定制首页导航栏center部分-->
    <template v-slot:center>
      <div>购物街</div>
    </template>
  </nav-bar>
</template>

<script>
//首页头部导航栏拆分

//导入头部导航栏
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "HomeNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped>
/*设置头部导航栏背景和文字样式*/
.home-nav {
  background: var(--color-high-text);
  color: #fff;
}
</style>
