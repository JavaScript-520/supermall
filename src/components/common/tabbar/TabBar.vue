<template>
  <div class="tabBar">
    <!--插入自定义Item，然后替换到TabBarItem里-->
    <slot></slot>
  </div>
</template>

<script>
//导航栏外框组件

export default {
  name: "TabBar",
  components: {}
}
</script>
<style scoped>
/*设置Tab导航栏外框样式*/
.tabBar {
  height: 49px;
  text-align: center;
  display: flex;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .1)
}

</style>
