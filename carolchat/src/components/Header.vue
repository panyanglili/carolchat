<template>
  <div>
    <el-tooltip
        class="box-item"
        effect="light"
        content="Back Homepage"
        placement="bottom"
    >
      <h1>
        <router-link to="/">
          <span>Carol Chat</span>
        </router-link>
      </h1>
    </el-tooltip>
    <span class="move"><img src="src/assets/icon/move.png"></span>
    <span class="surprise" style="display: inline-block;background-color: transparent;height: 20px;width: 20px">
    </span>
    <span class="egg" style="font-size: x-small">
<!--      <img src="src/assets/icon/egg.svg" style="margin-top: 10px">-->
      Congratulations on finding the hidden egg! Contact the email below saying "Merry Christmas, Lovely cat!" for a surprise!
    </span>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Header",
  methods:{

  },
}
//控制彩蛋的show
$(document).ready(function (){
  $(".egg").hide();
  $(".move").click(function (){
    $(".egg").show();
  });
})
</script>

<style scoped>
div{
  display: flex;
  justify-content: left;
  border-bottom: 1px solid #EBEEF5;
  padding: 0px 10px;
  align-items: center;
}
/*修改header标题字体*/
h1 a{
  color: #303133;
  text-decoration: none; /*去掉链接下划线*/
  font-size: larger;
  line-height: 50px;
}
/*自定义彩蛋hover的标*/
.move:hover{
  cursor: url("../assets/icon/egg.cur"),default;
}
/*移动的圣诞老人*/
@keyframes move {
  0%{
    transform: translateX(0px);
  }
  50%{
    transform: translateX(800px);
  }
  100%{
    transform: translateX(0px);
  }
}
.move{
  display: inline-block;
  margin-left: 10px;
  animation-name: move;
  animation-duration: 16s; /*动画持续时间*/
  animation-iteration-count: infinite; /*动画循环次数*/
  animation-timing-function: linear; /*动画的速度曲线*/
}
</style>