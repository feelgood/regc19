import vanillaAxios from 'axios'

const axios = vanillaAxios.create({
  baseURL: 'https://regc19-api.herokuapp.com/c19',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default axios
