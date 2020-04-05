import { GET_REGISTRATION } from './types'

export const fetchRegistration = (registrationId = '123456') => ({
  type: GET_REGISTRATION,
  request: {
    url: '/registrations/' + registrationId,
    method: 'GET',
  },
})
