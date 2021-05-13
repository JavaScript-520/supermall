<template>
  <!--首页导航栏组件-->
  <div class="navBar">
    <!--左边首页导航-->
    <!--加上外边的div可以更好设置样式-->
    <div class="navBarLeft">
      <slot name="left"></slot>
    </div>
    <!--中间首页导航-->
    <div class="navBarCenter">
      <slot name="center"></slot>
    </div>
    <!--右边首页导航-->
    <div class="navBarRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
//头部导航栏组件

export default {
  name: "NavBar",
  data() {
    return {}
  }
}
</script>

<style scoped>
/*首页导航栏外框样式*/
.navBar {
  height: 44px;
  line-height: 44px; /*注：如果有文字的话可以光设置line-height 被撑起来*/
  text-align: center;
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 1px 1px rgba(100, 100, 100, .9);
}

/*左边、右边的首页导航栏样式*/
.navBar .navBarLeft, .navBarRight {
  width: 60px;
}

/*中间的首页导航栏样式*/
.navBar .navBarCenter {
  flex: 1;
}
</style>
