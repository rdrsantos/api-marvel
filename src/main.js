import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loader from '@/components/Loader.vue'

createApp(App).use(store).use(router).component("Loader", Loader).mount('#app')
