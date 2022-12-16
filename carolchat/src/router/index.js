import Header from "../components/Header.vue";
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import myPost from "../views/myPost.vue";
import hotTopic from "../views/channels/hotTopic.vue";
import Home from "../components/Home.vue";
import myDeal from "../views/mydeal/myDeal.vue";
import myInfo from "../views/myInfo.vue";
import careerAdv from "../views/channels/careerAdv.vue";
import emotional from "../views/channels/emotional.vue";
import casual from "../views/channels/casual.vue";
import message from "../views/message.vue";
import trading from "../views/trade/trading.vue";
import freeDeal from "../views/trade/freeDeal.vue";
import exercise from "../views/channels/exercise.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/hotTopic', component: hotTopic },
    { path: '/myPost', component: myPost },
    { path: '/myDeal', component: myDeal },
    { path: '/myInfo', component: myInfo},
    { path: '/career', component: careerAdv},
    { path: '/message', component: message},
    { path: '/emotional', component: emotional},
    { path: '/casual', component: casual},
    { path: '/trading', component: trading},
    { path: '/freeDeal', component: freeDeal},
    { path: '/exercise', component: exercise},
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
