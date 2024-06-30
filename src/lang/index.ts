import { createI18n } from 'vue-i18n';
import enLocale from './en/en';
import zhLocale from './zh/zh-cn';
import elEnLocale from 'element-plus/es/locale/lang/en'
import elZhLocale from 'element-plus/es/locale/lang/zh-cn'

const messages = {
  en: {
    ...enLocale,
    ...elEnLocale
  },
  'zh-cn': {
    ...zhLocale,
    ...elZhLocale
  }
}
const i18n = createI18n({
  locale: navigator.language.split('-')[0] || 'en', // 默认语言
  // fallbackLocale: 'en', // 备用语言
  messages,
});

export default i18n;
