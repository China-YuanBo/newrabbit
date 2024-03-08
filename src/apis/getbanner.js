import httpInstance from "@/utils/http.js";


/**
 * 
 * @description:获取轮播图图片 
 * 
 */
export function getbanner(distributionSite = 1) {
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })

}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}


/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot'
  })
}


/**
 * 获取商品
 */
export const findGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}
