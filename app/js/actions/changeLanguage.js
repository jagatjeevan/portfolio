import types from "../utils/actionTypes";

export function changeLanguage(lang) {
  return {
    type: types.LANGUAGE,
    payload: lang,
  };
}
