<template>
  <!--推荐栏组件-->
  <div class="recommend">
    <!--遍历每个热门类别    （img图片 span文字）-->
    <div class="recommend-item" v-for="item in recommend">
      <a :href="item.link">
        <img :src="item.images" alt="">
        <span>{{ item.acm }}</span>
      </a>
    </div>
  </div>
</template>

<script>
//推荐栏组件编写

export default {
  name: "HomeRecommend",
  data() {
    return {}
  },
  props: {
    //获取从父传来的推荐数据
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
/*外框样式*/
.recommend {
  padding: 10px 0 20px;
  display: flex;
  border-bottom: 10px solid #eee;
}

/*推荐栏的内部单个样式*/
.recommend-item {
  flex: 1;
  text-align: center;
}

/*设置每个图片样式*/
.recommend-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  vertical-align: middle;
}

/*设置每个文字样式*/
.recommend-item span {
  display: block;
  font: normal 500 12px "微软雅黑";
  margin-top: 8px;
  color: #666;
}
</style>
