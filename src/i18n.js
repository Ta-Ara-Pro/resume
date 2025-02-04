import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import fa from "./locales/fa.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa }
    },
    lng: "fa",
    fallbackLng: "fa", 
    interpolation: { escapeValue: false }
  });

// Set document direction to RTL for Persian
document.documentElement.lang = "fa";
document.documentElement.dir = "rtl";

export default i18n;
