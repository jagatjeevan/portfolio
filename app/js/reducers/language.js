// @flow

import actionTypes from '../utils/actionTypes';

type languageState = {
  language: string,
};

const initialState: languageState = {
  language: '',
};

export default function language(state = initialState, action: Action) {
  switch (action.type) {
    case actionTypes.LANGUAGE:
      return Object.assign({}, state, { language: action.payload });
    default:
      return Object.assign({}, state, initialState);
  }
}
