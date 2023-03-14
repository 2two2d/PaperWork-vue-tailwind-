import { createApp } from 'vue'
import {store} from "./store"
import App from './App.vue'
import '@/assets/css/tailwind.css'
import ROUTER from "@/router";



createApp(App).use(ROUTER).use(store).mount('#app')
