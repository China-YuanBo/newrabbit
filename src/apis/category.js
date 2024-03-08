import httpInstance from "@/utils/http.js";

/**
 * 获取二级分类列表
 * 
 */

export function getTwoApi(id) {
  return httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}