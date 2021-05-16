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
    <!--导入标签控制组件到首页上-->
    <TabControl :tabControlItems="tabControlItems" class="tabCon"></TabControl>
    <!--临时加上可以看到下滑效果-->
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>32</li>
      <li>33</li>
      <li>34</li>
      <li>35</li>
      <li>36</li>
      <li>37</li>
      <li>38</li>
      <li>39</li>
      <li>40</li>
      <li>41</li>
      <li>42</li>
      <li>43</li>
      <li>44</li>
      <li>45</li>
      <li>46</li>
      <li>47</li>
      <li>48</li>
      <li>49</li>
      <li>50</li>
    </ul>
  </div>
</template>

<script>
//导入标签控制组件
import TabControl from "components/content/tabControl/TabControl";

//导入首页拆分封装的头部导航栏
import HomeNavBar from "views/home/childComps/HomeNavBar";
//导入首页拆分封装的轮播图
import HomeSwiper from "views/home/childComps/HomeSwiper";
//导入首页推荐栏的组件
import HomeRecommend from "views/home/childComps/HomeRecommend";
//导入本周流行组件
import HomePopular from "views/home/childComps/HomePopular";

//导入Home拆分的数据获取JS
//获取请求的轮播图数据   获取请求的推荐数据  获取请求的流行数据 获取请求的商品数据
import {
  getHomeMultidata,
  getHomeRecommend,
  getHomePopularList,
  getHomeGoods
} from "network/home";

export default {
  name: "Home",
  data() {
    return {
      //存放轮播图数据
      banners: [],
      //存放推荐栏数据
      recommend: [],
      //存放流行数据
      popularList: [],
      //标签控制上要传入的数据标签
      tabControlItems: ['流行', '新款', '精选'],
      //商品列表展示数据
      goods: {
        'pop': {page: 0, list: []},
        'news': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
    }
  },
  //组件初始化钩子   注意初始化方法里面尽量不要写逻辑代码
  created() {
    //初始化轮播图数据
    this.getHomeMultidata();
    //初始化推荐数据
    this.getHomeRecommend();
    //初始化流行数据
    this.getHomePopularList();
    //初始化首页商品数据
    this.getHomeGoods(this.goods['pop']['page'] + 1, 'pop');
    this.getHomeGoods(this.goods['news']['page'] + 1, 'news');
    this.getHomeGoods(this.goods['sell']['page'] + 1, 'sell');
  },
  //组件方式
  methods: {
    ////获取轮播图数据
    getHomeMultidata() {
      getHomeMultidata().then(response => {
        this.banners = response["banner"];
      }).catch(err => {
        console.log("轮播图数据初始化失败")
      })
    },
    getHomeRecommend() {
      //获取推荐数据
      getHomeRecommend().then(response => {
        this.recommend = response.recommend;
      }).catch(err => {
        console.log("推荐数据初始化失败")
      })
    },
    //获取流行数据
    getHomePopularList() {
      getHomePopularList().then(response => {
        this.popularList = response['popular'];
      }).catch(err => {
        console.log("流行数据初始化失败")
      })
    },
    //获取商品数据
    getHomeGoods(currentPage, reqObj) {
      getHomeGoods(currentPage, reqObj).then(response => {
        for (let index in response[reqObj]) {
          this.goods['pop']['list'].push(response[reqObj][index])
        }
      }).catch(err => {
        console.log("商品初始化失败")
      })
    }
  },
  //注册组件
  components: {
    TabControl,
    HomeSwiper, HomeNavBar, HomeRecommend, HomePopular
  }
}
</script>
<style scoped>
/*设置此class其实是设置到TabControl组件上，设置后上滑会定位上指定高度 是相对定位与绝对定位的切换*/
.tabCon {
  position: sticky;
  top: 44px;
}
</style>
