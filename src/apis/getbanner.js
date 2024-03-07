import httpInstance from "@/utils/http.js";

export function getbanner() {
  return httpInstance({
    url: '/home/banner'
  })

}