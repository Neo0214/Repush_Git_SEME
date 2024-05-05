import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import app from "@/App.vue";


createApp(app).mount('#app')

app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

