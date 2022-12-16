<template>
  <div class="common-layout">
    <el-container class="container">
      <el-aside width="240px">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header style="height: 50px;padding: 0px">
          <Header/>
        </el-header>
        <el-main style="padding: 0px">
          <Main></Main>
        </el-main>
        <el-footer height="30px" style="padding: 0px">
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>


import Aside from "./Aside.vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Main from "./Main.vue";

export default {
  name: "Layout",
  components: {Main, Footer, Header, Aside},
}
</script>

<style scoped>
.common-layout {
  height: 100%;
}
.container{
  height: 100%;
}
</style>