import types from '../constants/actionType';


export function changeLanguage(lang) {
  return {
    type: 'LANGUAGE',
    payload: lang,
  };
}
