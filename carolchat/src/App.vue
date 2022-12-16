<template>
  <layout/>
<!--  <HelloWorld msg="Hello Vue 3.0 + Vite" />-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Layout from "./components/Layout.vue";

export default {
  name: 'App',
  components: {
    Layout,
    HelloWorld
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
<style>
*{
  margin: 0 !important;
  padding: 0;
  text-decoration: none;
}
#app{
  height: 100%;
}
</style>
