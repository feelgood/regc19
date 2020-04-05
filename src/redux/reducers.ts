import localStorage from 'redux-persist/es/storage'
import { persistCombineReducers } from 'redux-persist'

import { requestsReducer, RequestsState } from './requests/reducer'

const persistConfig = {
  key: 'primary',
  storage: localStorage,
  whitelist: ['user'],
}

export type MainState = {
  requests: RequestsState
}

export default persistCombineReducers<MainState>(persistConfig, {
  requests: requestsReducer,
})
