import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// ? Resources
import en from "./en-US/index";
import es from "./es-ES/index";

const resources = {
  "en-US": {
    translation: en,
  },
  "es-ES": {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en-US",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
