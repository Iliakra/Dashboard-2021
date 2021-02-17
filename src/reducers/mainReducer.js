import settings from './../configuration/Settings'
import { hashIsEmpty, updateViewStatusFromHash, updateHashFromViewStatus } from './../core/helpers'

import feedEditorReducer from './feedEditorReducer'

let mainReducerController = (state={}, action) => {

    // console.log("mainReducer",action);

    switch (action.type) {

      case 'APP_INIT': {
        return {
          ...state,
          ...settings.defaultState,
          passStatus:{},
        }
      }

      // case 'APP_LOADING': {
      //   return {
      //     ...state,
      //   }
      // }
      //
      // case 'APP_START': {
      //   return {
      //     ...state,
      //   }
      // }
      case 'SET_STORAGE_DATA': {
        let newState={
          ...state,
          ...action.data,
        }
        if (hashIsEmpty()) {
          updateHashFromViewStatus(newState.viewStatus);
        } else {
          newState.viewStatus=updateViewStatusFromHash(newState.viewStatus);
        }
        return newState;
      }

      case 'GET_VIEW_STATUS_FROM_HASH': {
        let newState={
          ...state,
          ...action.data,
          dataForStorageChanged:true,
        }
        newState.viewStatus=updateViewStatusFromHash(settings.defaultState.viewStatus);
        return newState;
      }

      case 'SAVE_STORAGE_DATA':
      case 'WAITING_FOR_RELOAD_STORE_DATA':
      case 'STORAGE_DATA_SAVED':
      case 'SET_STORE_DATA':
      case 'LOAD_STORE_DATA_ERROR':
      case 'RELOAD_STORE_DATA':
      case 'WINDOW_ACTIVATED':
      case 'WINDOW_DEACTIVATED':{
        return {
          ...state,
          ...action.data,
        }
      }

      case 'CHANGE_VIEW_MODE':
      case 'SET_CURRENT_FRAME':
      case 'SET_FORMAT':
      case 'SET_SECTION':
      case 'SET_PUBLISHER':
      case 'SET_PLATFORM':
      case 'SET_FEED':
      case 'SET_STATUS':
      case 'SET_PASSED_VIEW':
      case 'SET_SORT_MODE':{
        let viewStatus={
          ...state.viewStatus,
          ...action.data,
        }
        updateHashFromViewStatus(viewStatus);
        return {
          ...state,
          dataForStorageChanged:true,
          viewStatus,
        }
      }

      case 'CLEAR_FILTERS':{
        let viewStatus={
          ...state.viewStatus,
          format:"all",
          section:"all",
          publisher:"all",
          platform:"all",
          feed:"all",
          status:"all",
          passedView:"all",
        }
        updateHashFromViewStatus(viewStatus);
        return {
          ...state,
          dataForStorageChanged:true,
          viewStatus,
        }
      }

      case 'PASS_CREATIVE': {
        let passStatus=state.passStatus;
        passStatus[action.data.name]=action.data.passed;
        return {
          ...state,
          dataForStorageChanged:true,
          passStatus,
        }
      }

      default:
        return state
    }
}

const mainReducer = (state={}, action) => {

  if (action.extraAction) {
    state = mainReducer(state,action.extraAction);
  }

  state = mainReducerController(state,action);
  state = feedEditorReducer(state,action);

  return state;
}


export default mainReducer
