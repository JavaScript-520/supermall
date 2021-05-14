<template>
  <swiper style="margin-top: 44px;">
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
//二次封装的主页轮播图组件

//导入轮播图组件
import {Swiper, SwiperItem} from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  props: {
    //轮播图数据
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper, SwiperItem
  }
}
</script>

<style scoped>

</style>
