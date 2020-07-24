import * as Localization from "expo-localization";
import i18n from "i18n-js";
import thLang from "../locales/th";
import enLang from "../locales/en";

// en-US
// th-TH
i18n.translations = {
  th: thLang,
  en: enLang
};

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;
// Reducer
let initialState = {
  i18n: i18n,
  translation: enLang
};

function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case "th":
      return {
        i18n: state.i18n,
        translation: thLang
      };
    case "en":
      return {
        i18n: state.i18n,
        translation: enLang
      };
    default:
      return state;
  }
}

export default counterReducer;
