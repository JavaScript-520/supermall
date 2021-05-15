<template>
  <!--流行组件-->
  <div class="popular">
    <!--流行组件标题-->
    <h4 class="title">本周流行</h4>
    <!--每个流行的item-->
    <div v-for="item in popularList">
      <!--跳转地址 我的博客  搜博客园蚂蚁小哥-->
      <a :href="item.link">
        <!--图片地址-->
        <img :src="item.img" alt="">
        <!--每个子项的名称-->
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
//流行组件

export default {
  name: "HomePopular",
  data() {
    return {}
  },
  props: {
    //流行数据由父类传来
    popularList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.popular {
  display: flex;
  position: relative;
  padding-top: 35px;
  flex-wrap: wrap;
  text-align: center;
}

.popular .title {
  font: normal 600 16px "微软雅黑";
  position: absolute;
  left: 0;
  top: 5px;
  right: 0;
}

.popular > div {
  flex: 1;
  margin: 5px 5px;
}

.popular img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
  margin-bottom: 8px;
}

.popular span {
  display: block;
  font: normal 400 12px "微软雅黑";
}
</style>
