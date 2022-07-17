import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import Store from './store'

createApp(App)
    .use(store)
    .mount('#app')
