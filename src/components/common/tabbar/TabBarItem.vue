<template>
  <!--导航栏单个Item组件-->
  <div class="tabBarItem" @click="itemClick">
    <!--导航栏图片插槽激活状态-->
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <!--导航栏图片插槽未激活状态-->
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <!--导航栏航栏文字插槽 外面包一个div是为了防止在slot里面写class样式被替换掉-->
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
//导航栏内部单个Item组件

export default {
  name: "TabBarItem",
  data() {
    return {}
  },
  props: {
    //path:导航栏跳转的地址
    path: {
      type: String,
      require: true,
    },
    //textActiveColor：为激活的文本颜色
    textActiveColor: {
      type: String,
      default() {
        return "#f69"
      }
    }
  },
  computed: {
    //当前组件路径和组件定义的组件处于同一个路径则返回true 激活
    isActive() {
      return this.path.indexOf(this.$route.path) === 0
    },
    // 计算当前组件是否为激活状态，激活状态改变文字颜色
    isActiveColor() {
      return this.isActive === true ? {"color": this.textActiveColor} : ""
    }
  },
  methods: {
    //点击事件后我们要跳转到指定的路由下页面
    // .catch(error => error) 防止路由中点击路径重复报错
    itemClick() {
      this.$router.push(this.path).catch(err => err)
    }
  }
}
</script>
<style scoped>

/*设置Tab导航栏内框的Item样式*/
.tabBarItem {
  cursor: pointer;
  flex: 1;
}

/*设置Tab导航栏内框的Item样式的图片*/
.tabBarItem img {
  width: 24px;
  height: 24px;
  margin: 3px 0 2px;
  vertical-align: middle;
}

/*设置Tab导航栏内框的Item样式的文字*/
.tabBarItem span {
  display: block;
  font: normal 500 14px "微软雅黑"
}
</style>
