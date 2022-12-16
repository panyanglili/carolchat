<template>
  <el-row class="tac">
    <el-col>
      <h5 class="mb-2">Navigation</h5>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          active-text-color="#626aef"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
<!--            <el-icon><location /></el-icon>-->
            <span class="popular">Popular Channels</span>
          </template>
            <router-link to="/hotTopic">
              <el-menu-item index="1-1">hot topics</el-menu-item>
            </router-link>
            <router-link to="/career">
              <el-menu-item index="1-2">career advice</el-menu-item>
            </router-link>
          <router-link to="/emotional">
            <el-menu-item index="1-3">emotional communication</el-menu-item>
          </router-link>
          <router-link to="/exercise">
            <el-menu-item index="1-4">exercise & health</el-menu-item>
          </router-link>
          <router-link to="/casual">
            <el-menu-item index="1-5">casual chat</el-menu-item>
          </router-link>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
<!--            <el-icon><location /></el-icon>-->
            <span class="trade">Old Things, New Homes</span>
          </template>
          <router-link to="/trading">
            <el-menu-item index="2-1">trading in old things</el-menu-item>
          </router-link>
          <router-link to="/freeDeal">
            <el-menu-item index="2-2">free of charge</el-menu-item>
          </router-link>
        </el-sub-menu>
        <router-link to="/myPost">
          <el-menu-item index="3">
<!--          <el-icon><document /></el-icon>-->
          <span class="mypost">My Posts</span>
          </el-menu-item>
        </router-link>
        <router-link to="/myDeal">
          <el-menu-item index="4">
<!--              <el-icon><document /></el-icon>-->
              <span class="mydeal">My Deals</span>
          </el-menu-item>
        </router-link>
        <router-link to="/message">
          <el-menu-item index="5">
<!--            <el-icon><document /></el-icon>-->
            <el-badge is-dot class="item">
              <span class="message">Messages</span>
            </el-badge>
          </el-menu-item>
        </router-link>
        <router-link to="/myInfo">
          <el-menu-item index="6">
<!--              <el-icon><setting /></el-icon>-->
              <span class="myinfo">My Information</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "Aside",
  data(){
    return{
      // isCollapse: true,
    }
  },
  // methods:{
  //   handleOpen(key,keyPath){
  //     console.log(key,keyPath)
  //   },
  //   handleClose(key,keyPath){
  //     console.log(key,keyPath)
  //   },
  // }
}
</script>

<style scoped>
.tac{
  /*background-color:#79bbff;*/
  height: 100%;
}
.el-col{
  border-right: solid 1px #E4E7ED;
}
.el-menu{
  border: none;
}
.mb-2{
  height: 50px;
  font-size: larger;
  line-height: 50px;
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mb-2::before{
  content: url("../assets/icon/nav.svg");
  margin: 15px 2px 0px 0px;
}
a{
  color: #303133;
  width: 100%;
  text-align: left;
}
a:hover {
  text-decoration: underline;
}
:deep(sup){
  margin-top: 15px !important;
}
.popular::before{
  content: url("../assets/icon/popular.svg");
  margin: 10px 3px 0px 0px;
}.message::before{
  content: url("../assets/icon/message.svg");
  margin: 10px 3px 0px 0px;
}
.myinfo::before{
  content: url("../assets/icon/myinfo.svg");
  margin: 10px 3px 0px 0px;
}
.trade::before{
  content: url("../assets/icon/trade.svg");
  margin: 10px 3px 0px 0px;
}
.mypost::before{
  content: url("../assets/icon/mypost.svg");
  margin: 10px 3px 0px 0px;
}
.mydeal::before{
  content: url("../assets/icon/mydeal.svg");
  margin: 10px 3px 0px 0px;
}
span{
  display: flex;
  align-items: center;
}

</style>