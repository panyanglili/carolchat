import { createApp } from 'vue'
//从一个单文件组件中导入根组件
// import Vue from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
//引入elementUI
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import VueSocketIO from "vue-socket.io";
import SocketIO from './plugins/io.js'

const app = createApp(App)
// new VueSocketIO({
//     connection:"http://localhost:5173"
// })
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.use(SocketIO, {
    debug:true, //生产的时候关掉
    connection: 'ws://localhost:3000',
    extraHeaders: { 'Access-Control-Allow-Origin': '*' },
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
