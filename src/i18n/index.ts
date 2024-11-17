import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerGe from "./ge/pages/header.json";
import headerEn from "./en/pages/header.json";
import signInGe from "./ge/pages/sign-in.json";
import signInEn from "./en/pages/sign-in.json";
import signUpGe from "./ge/pages/sign-up.json";
import signUpEn from "./en/pages/sign-up.json";
i18n.use(initReactI18next).init({
  resources: {
    ge: {
      translation: {
        "header-page": headerGe,
        "sign-in": signInGe,
        "sign-up": signUpGe,
      },
    },
    en: {
      translation: {
        "header-page": headerEn,
        "sign-in": signInEn,
        "sign-up": signUpEn,
      },
    },
  },
  lng: "ge",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
