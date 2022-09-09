import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://system-call.herokuapp.com',
})
