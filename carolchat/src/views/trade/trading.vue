<template>
  <div class="deal">
    <el-row>
      <el-col
          v-for="(o, index) in 12"
          :key="o"
          :span="8"
          :offset="index > 0 ? 2 : 0"
      >
        <el-card :body-style="{ padding: '0px'}">
          <div class="imgdiv">
            <img
                src="../../assets/deal/hat.jpeg"
                class="image"
            />
          </div>
          <div style="padding: 4px;display: block;height: 60px">
            <span>Christmas hat{{o}} £1.9</span>
            <div class="bottom">
<!--              <time class="time">{{ currentDate }}</time>-->
              <el-button text class="button" size="large">BUY IT</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
<!--  <h1>Trading content</h1>-->
<!--  <el-empty description="I'm working hard on it ~" />-->
</template>

<script>
export default {
  name: "trading",
  data(){
    return{
      currentDate:'',
    }
  },
  created() {
    this.currentDate = new Date();
  }
}
</script>

<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  /*margin-top: 13px !important;*/
  /*line-height: 12px;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  /*width: auto;*/
  display: block;
  height: 100%;
}
.imgdiv{
  height: 240px;
}
:deep(.el-card__body){
  height: 300px;
  display: flex;
  flex-direction: column;
}
:deep(.el-col-8){
  margin: 10px 10px 0px 0px !important;
  max-width: 225px;
}
.deal{
  padding-left: 10px;
}
</style>