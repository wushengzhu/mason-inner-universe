import { createApp } from 'vue'
import 'normalize.css'
import 'virtual:windi.css'
import './style.css'
import App from './App.vue'
import i18n, { i18nConfig } from './lang/index';

import router from './routes'

const app = createApp(App)
app.config.globalProperties.$t = i18nConfig.t;
app.use(i18n).use(router).mount('#app')
