import { createApp } from 'vue'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import {createPinia} from "pinia";
import router from "./router";
import '@arco-design/web-vue/dist/arco.css';
import './style.css'

import App from './App.vue'

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(ArcoVueIcon)

app.mount('#app')
