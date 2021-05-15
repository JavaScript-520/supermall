<template>
  <div id="home">
    <!--导入头部导航栏组件（首页封装的）-->
    <HomeNavBar></HomeNavBar>
    <!--导入轮播图组件（首页封装的）-->
    <HomeSwiper :banners="banners"></HomeSwiper>
    <!--导入推荐栏组件（首页封装的）-->
    <HomeRecommend :recommend="recommend"></HomeRecommend>
    <!--导入本周流行组件（首页封装）-->
    <HomePopular :popularList="popularList"></HomePopular>
  </div>
</template>

<script>

//导入首页拆分封装的头部导航栏
import HomeNavBar from "views/home/childComps/HomeNavBar";
//导入首页拆分封装的轮播图
import HomeSwiper from "views/home/childComps/HomeSwiper";
//导入首页推荐栏的组件
import HomeRecommend from "views/home/childComps/HomeRecommend";
//导入本周流行组件
import HomePopular from "views/home/childComps/HomePopular";

//导入Home拆分的数据获取JS  获取请求的轮播图数据
import {getHomeMultidata} from "network/home";
//导入Home拆分的数据获取JS  获取请求的推荐数据
import {getHomeRecommend} from "network/home";
//导入Home拆分的数据获取JS  获取请求的流行数据
import {getHomePopularList} from "network/home";

export default {
  name: "Home",
  data() {
    return {
      //存放轮播图数据
      banners: [],
      //存放推荐栏数据
      recommend: [],
      //存放流行数据
      popularList: []
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
    //初始化推荐数据
    getHomeRecommend().then(response => {
      this.recommend = response.recommend;
    }).catch(err => {
      console.log("推荐数据初始化失败")
    })
    //初始化流行数据
    getHomePopularList().then(response => {
      this.popularList = response['popular'];
    }).catch(err => {
      console.log("流行数据初始化失败")
    })
  },
  //注册组件
  components: {
    HomeSwiper, HomeNavBar, HomeRecommend, HomePopular
  }
}
</script>
<style scoped>

</style>
