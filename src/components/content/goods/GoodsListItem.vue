<template>
  <!--商品组件的Item小组件，放在商品组件外框里-->
  <div class="goods-item">
    <img :src="goodsItem.img" alt="">
    <p>{{ goodsItem.msg }}</p>
    <div>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="fav">{{ goodsItem.fav }}</span>
    </div>
  </div>
</template>

<script>
//商品组件的Item小组件，放在商品组件外框里

export default {
  name: "GoodsListItem",
  data() {
    return {}
  },
  props: {
    //每个商品数据
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods-item {
  width: 48%;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  font: normal 500 10px "微软雅黑";
  margin-bottom: 5px;
  border: 1px solid #eee;
}

.goods-item:hover {
  border: 1px solid #d9865a;
  box-shadow: 2px 2px 5px 5px rgba(217, 134, 90, .1);
}

.goods-item:nth-child(even) {
  margin-right: 4px;
}

.goods-item:nth-child(odd) {
  margin-left: 4px;
}

.goods-item > img {
  width: 172px;
  height: 235px;
  vertical-align: middle;
  border-radius: 10px;
}

.goods-item > p {
  height: 30px;
  padding: 0 5px;
  margin: 5px 0 0;
  word-break: break-all;
  display: -webkit-box; /**对象作为伸缩盒子模型展示*/
  --webkit-box-orient: vertical; /**设置或检索伸缩盒子对象的子元素的排列方式**/
  --webkit-line-clamp: 2; /**显示的行数**/
  text-overflow: ellipsis;
  overflow: hidden; /**隐藏超出的内容**/
}

.goods-item > div {
  height: 22px;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
}

.goods-item .price {
  font: normal 800 16px/22px "微软雅黑";
  color: #131212;
}

.goods-item .fav {
  font: normal 500 12px/20px "微软雅黑";
  color: #aaa;
  margin-right: 16px;
  position: relative;
}

.goods-item .fav:after {
  content: "";
  position: absolute;
  margin-left: 2px;
  top: 3px;
  width: 14px;
  height: 14px;
  background: url("~assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>
