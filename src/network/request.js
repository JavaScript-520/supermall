//导入Axios网络请求模块
import axios from 'axios'

//导出对axios二次封装的request
export function request(config) {

  //创建一个请求对象
  let instance = axios.create({
    //设置局部基本的请求路径前缀
    baseURL: "http://192.168.197.7:8082/",
    //设置局部的超时时间
    timeout: 3000
  });

  //创建axios请求拦截器
  instance.interceptors.request.use(resolve => {
    return resolve
  }, err => {
    //return err
  })
  //创建axios响应拦截器
  instance.interceptors.response.use(resolve => {
    return resolve.data
  }, err => {
    return err
  })
  //发送请求
  return instance(config)
}
