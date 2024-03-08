<script setup>
import { getTwoApi } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getbanner} from '@/apis/getbanner.js';


let route = useRoute();
let twoCategoryList = ref({});

const getTwoList = async ()=> {
  const res = await getTwoApi(route.params.id);
  twoCategoryList.value = res.result;
}

let bannerimg = ref([]);
async  function getbanners() {
 let {result} = await getbanner(2);
 bannerimg.value = result;
}

onMounted(()=> {
  getTwoList();
  getbanners();
})

</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{twoCategoryList.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerimg" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}

.home-banner {
  width: 1240px;
  height: 500px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
</style>