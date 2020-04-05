import { AxiosError } from 'axios'
import { handleRequests } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from '../../api'
import { GET_REGISTRATION } from './types'

export type RequestsStateQueries = {
  [GET_REGISTRATION]: RequestQuery<{ property: 'value' }>
}

export type RequestQuery<T> = {
  data: T
  loading: boolean
  error: AxiosError
}

export type RequestsState = {
  queries: RequestsStateQueries
  mutations: {}
  cache: {}
  requestsKeys: {}
  normalizedData: {}
}

export const { requestsReducer, requestsSagas } = handleRequests({
  driver: createDriver(axios),
})
