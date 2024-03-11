import httpInstance from "@/utils/http.js";


/**
 * 商品详情
 */

export function getDetailApi(id) {
  return httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}