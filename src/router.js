import {createRouter, createWebHashHistory} from "vue-router";
import HeaderNav from "@/components/HeaderNav.vue";
import StopWatch from "@/components/StopWatch.vue";
import WorldTime from "@/components/WorldTime.vue";
import Timer from "@/components/Timer.vue";
import {App} from "vue";

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        {path: '/', component: App},
        {},
        {},
    ]
})

