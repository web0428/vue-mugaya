import * as types from './mutation-types'

export default {
  [types.SHOW_USER_NAME] (state) {
    state.open=!state.open;
  }
};