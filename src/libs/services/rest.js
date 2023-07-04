import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from '../constants/cookie'
import { API_URL } from '../constants/common.js'

const rest = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Interceptors' handlers
 */
const setToken = (config) => {
  if (!config?.headers?.authorization) {
    const token = Cookies.get(TOKEN)
    if (token && config.headers) {
      config.headers.authorization = token
    }
  }

  return config
}

const requestMapper = (config) => {
  return config
}

const responseMapper = (response) => {
  return Promise.resolve(response)
}

const errorHandler = ({ response }) => {
  return Promise.reject(response?.data)
}
/**
 * Apply request interceptors
 */
rest.interceptors.request.use(setToken)
rest.interceptors.request.use(requestMapper)

/**
 * Apply response interceptors
 */
rest.interceptors.response.use(responseMapper, errorHandler)

export default rest
