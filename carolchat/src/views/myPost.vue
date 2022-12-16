<template>
  <h1>My post content</h1>
<!--  <el-empty description="I'm working hard on it ~" />-->
  <el-input id="inputArea" v-model="userInput" placeholder="please input"></el-input>
  <el-button @click="send">send</el-button>
  <el-button @click="receive">receive</el-button>
  <div class="box">
  {{boxContent}}
  </div>
</template>


<script>
const socket = window.io.connect('http://localhost:3000');
// import io from '../socket/socket'
export default {
  name: "myPost",
  data(){
    return{
      boxContent:'',
      userInput:'',
    }
  },
  created() {
    //一定要移除旧的message监听，否则会出现重复监听的状况
    // socket.removeListener('message');
    //这是移除所有监听
    socket.removeAllListeners();
    socket.on('message',(data) =>{
      console.log(data)
    });
  },
  mounted() {
  },
  methods:{
    send(){
      // console.log(socket)
      //emit,发送信息给服务端
      socket.emit('hello',this.userInput) //发送hello这个东西
      //移除旧的rehello接口监听
      socket.removeListener('rehello');
      //监听rehello接口
      socket.on('rehello',(data) => {
        console.log(data);
        this.boxContent = data;
      });
      // socket.on('hello',this.boxContent)
    },
    //接收来自服务端的信息
    receive(){
      socket.on('rehello',(data) => {
        console.log(data);
      });
    },
  },
  sockets: {
    //查看socket是否连接成功
    connect() {
      console.log("socket.io链接成功");
      // 向服务端发消息
    },
    disconnect() {
      console.log("socket.io断开链接");
    }, //检测socket断开链接
    reconnect(data) {
      console.log("socket.io重新链接",data);
    },
    //客户端接收后台传输的socket事件
    ClientReceive(data) {
      console.log("--messageData", messageData); //接收的消息
    },
    message(data){
      console.log(data)
    }
  },

}
</script>

<style scoped>
.box{
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}
</style>