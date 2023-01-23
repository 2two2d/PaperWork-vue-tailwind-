import { createRouter, createWebHistory } from 'vue-router'
import StopWatch from "@/views/StopWatch";
import ClockTimer from "@/views/Timer";
import WorldTime from "@/views/WorldTime";


const routes = [
    {path: '/', redirect: {name: 'worldtime'}},
    {path: '/worldtime', component: WorldTime, name: 'worldtime'},
    {path: '/stopwatch', component: StopWatch, name: 'stopwatch'},
    {path: '/timer', component: ClockTimer, name: 'timer'},
]

const ROUTER = createRouter({
    history: createWebHistory(),
    routes
})

export default ROUTER