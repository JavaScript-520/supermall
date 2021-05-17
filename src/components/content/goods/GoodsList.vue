<template>
  <!--商品组件外框大组件-->
  <div class="goods-list">
    <!--  循环导入外框小组件-->
    <GoodsListItem v-for="item in goods" :goodsItem="item" clss="good-item"></GoodsListItem>
  </div>
</template>

<script>
//商品组件外框大组件

//导入组件 商品里的Item小组件
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  data() {
    return {}
  },
  props: {
    //从父组件获取商品数据
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  //组件注册
  components: {
    GoodsListItem
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.goods-list .good-item{
  flex: 1;
}
</style>
