import httpInstance from '@/utils/http.js';


async function test() {
  let ybo = await httpInstance.get('home/category/head');
  console.log("🚀 ~ test ~ req:", ybo)
}

export default test;