// @flow

import types from '../utils/actionTypes';

export function changeLanguage(lang: string): Action {
  return {
    type: types.LANGUAGE,
    payload: lang,
  };
}
