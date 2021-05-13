<template>
  <tab-bar>
    <slot>
      <!--导入导航栏单个元素-->
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~assets/images/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/images/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <!--导入导航栏单个元素-->
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="~assets/images/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/images/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <span>分类</span>
        </template>
      </tab-bar-item>
      <!--导入导航栏单个元素-->
      <tab-bar-item path="/shopcart">
        <template v-slot:item-icon>
          <img src="~assets/images/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/images/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <span>购物车</span>
        </template>
      </tab-bar-item>
      <!--导入导航栏单个元素-->
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~assets/images/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="~assets/images/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <span>我的</span>
        </template>
      </tab-bar-item>
    </slot>
  </tab-bar>

</template>

<script>
//组合导航栏 导航栏和外框的结合成为一个基本的导航栏

//导入组件汇总
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {TabBarItem, TabBar},
}
</script>

<style scoped>
</style>
