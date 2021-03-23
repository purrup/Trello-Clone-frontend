import Axios from 'axios'

const options = {
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

const instance = Axios.create(options)
export default instance
