import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import ROUTER from "@/router";
// import {createRouter, createWebHashHistory} from "vue-router";
// import HeaderNav from "@/components/HeaderNav.vue";
// import StopWatch from "@/components/StopWatch.vue";
// import WorldTime from "@/components/WorldTime.vue";
// import Timer from "@/components/Timer.vue";
// import StopWatch from "@/components/StopWatch";

// const ROUTER = createRouter({
//     history: createWebHashHistory(),
//
//     routes: [
//         {path: '/', component: App},
//         {path: '/stopwatch', component: StopWatch},
//         {},
//     ]
// })



createApp(App).use(ROUTER).mount('#app')
