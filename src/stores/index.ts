import { createStore,createLogger } from "vuex"
import ConfigStore from "./modules/config"

const store = {
  modules:{
    ConfigStore
  },
  // 插件
  plugins: [createLogger()] // 用于开发环境的日志记录
}

export default createStore(store)
