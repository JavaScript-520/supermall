//引入自己封装的网络请求
import {request} from "./request";

//返回请求过来的轮播图数据
export function getHomeMultidata() {
  return request({url: "banner/"});
}

//返回请求过来的推荐数据
export function getHomeRecommend() {
  return request({url: "recommend/"});
}

//返回流行数据
export function getHomePopularList() {
  return request({url: "popular/"});
}
