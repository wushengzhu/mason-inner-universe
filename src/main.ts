import { createApp } from 'vue'
import 'normalize.css'
import 'virtual:windi.css'
import './style.css'
import App from './App.vue'
import i18n from './lang/index';

import router from './routes'

const app = createApp(App)
app.use(i18n).use(router).mount('#app')
