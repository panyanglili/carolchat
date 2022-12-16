<template>
  <div class="block text-center">
<!--    <span class="demonstration">Switch when indicator is clicked</span>-->
    <el-carousel class="pic" trigger="click" :height="picHeight">
      <el-carousel-item v-for="item in picUrlList" :key="item">
<!--        <h3 class="small justify-center" text="2xl">{{ item }}</h3>-->
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="btn">
    <router-link to="/hotTopic">
      <el-button color="#626aef" type="primary" size="large">Take a look around</el-button>
    </router-link>
    <el-button color="#626aef" type="primary" size="large">Login/Registration</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      picUrlList:[
        '../src/assets/homePic1.jpeg',
        '../src/assets/homePic2.jpeg',
        '../src/assets/homePic3.jpg',
        '../src/assets/homePic4.webp',
        '../src/assets/homePic5.jpeg',
      ],
      //动态走马灯高度
      picHeight:'70vh', /*vh指相对于视窗的高度，1vh等于视窗高度的1%*/
      // picWidth:'40vw', /*vw指相对于视窗的宽度，1vw等于视窗高度的1%*/
    }
  },
  created() {
  },
  methods:{},
}
</script>

<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}
*{
  text-decoration: none;
}
img{
  width: 100%;
  height: auto;
}
/*走马灯居中且动态宽度*/
.block{
  width: 90%;
  margin: 20px auto !important;
}
.btn{
  margin: 30px auto !important;
  width: 500px;
  display: flex;
  justify-content: space-between;
}
:deep(.el-button) { /*使用:deep(选择器的方式穿透elementUI)*/
  font-size: large;
}
.el-carousel__item h3 {
  color: transparent;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  /*background-color: #99a9bf;*/
}

.el-carousel__item:nth-child(2n + 1) {
  /*background-color: #d3dce6;*/
}
</style>