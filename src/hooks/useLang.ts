import { ref } from "vue"
import { i18nConfig } from "../lang"



const useLang = () => {
  console.log(i18nConfig.locale)
  const locale = ref(i18nConfig.locale)

  const changeLang = (newLocale: 'en' | 'zh-CN') => {
    locale.value = newLocale;
    i18nConfig.locale = newLocale;
  }

  return {
    locale,
    changeLang,
  }
}

export default useLang;
