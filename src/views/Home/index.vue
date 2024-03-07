<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNews from './components/HomeNews.vue';
import HomeGoods from './components/HomeGoods.vue';
import HomePanel from './components/HomePanel.vue';
</script>



<template>
<div class="container">
  <HomeBanner></HomeBanner>
<HomeCategory></HomeCategory>
</div>
<HomeNews></HomeNews>
<HomeHot></HomeHot>
<HomeGoods></HomeGoods>

<HomePanel title='人气推荐' small_title="人气推荐 好多商品">
  <div>
    我是人气推荐的组件
  </div>
</HomePanel>
</template>




<style scoped lang="scss">


</style>