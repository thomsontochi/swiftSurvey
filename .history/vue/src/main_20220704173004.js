import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './inde'

createApp(App)
    .use(store)
    .mount('#app')
