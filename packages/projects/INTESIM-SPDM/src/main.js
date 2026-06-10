import { createApp } from 'vue'
import './style.css'
import router from './route'
import { store } from './store'
import App from './App.vue'
import VueI18n from "@common/locale";

const app = createApp(App);
app.use(router)
app.use(store)
app.use(VueI18n)
app.mount('#app')

