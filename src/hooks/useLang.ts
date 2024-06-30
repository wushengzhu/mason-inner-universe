import { ref } from "vue"
import i18n from "../lang"



const useLang = () => {
  const locale = ref(i18n.locale.value as any)

  const changeLang = (newLocale: string) => {
    locale.value = newLocale;
    i18n.locale.value = newLocale;
  }

  return {
    locale,
    changeLang,
  }
}

export default useLang;
