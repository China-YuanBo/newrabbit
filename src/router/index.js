import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '', //不填与上级路由一同显示
          component: Home,
        },
        {
          path: 'category/:id',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          component: subCategory,
        },
        {
          path: 'detail/:id',
          component: Detail,
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 路由滚滚动行为控制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
