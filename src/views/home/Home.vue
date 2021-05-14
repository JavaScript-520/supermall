<template>
  <div id="home">
    <!--导入头部导航栏组件（首页封装的）-->
    <HomeNavBar></HomeNavBar>
    <!--导入轮播图组件（首页封装的）-->
    <HomeSwiper :banners="banners"></HomeSwiper>
  </div>
</template>

<script>

//导入首页拆分封装的头部导航栏
import HomeNavBar from "views/home/childComps/HomeNavBar";
//导入首页拆分封装的轮播图
import HomeSwiper from "views/home/childComps/HomeSwiper";

//导入Home拆分的数据获取JS  获取请求的轮播图数据
import {getHomeMultidata} from "network/home";

export default {
  name: "Home",
  data() {
    return {
      //存放轮播图数据
      banners: []
    }
  },
  //组件初始化钩子
  created() {
    //初始化轮播图数据
    getHomeMultidata().then(response => {
      this.banners = response["banner"];
    }).catch(err => {
      console.log("轮播图数据初始化失败")
    })
  },
  //注册组件
  components: {
    HomeSwiper, HomeNavBar
  }
}
</script>
<style scoped>

</style>
