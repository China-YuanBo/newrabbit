// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export default {
  install: (app) => {
    // 定义全局自定义指令
    //监视是否进入可视元素中
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              el.src = binding.value;
              stop();
            }
          },
        )
      }
    })
  }
}