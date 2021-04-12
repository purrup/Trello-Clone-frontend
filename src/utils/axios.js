import Axios from 'axios'

const options = {
  baseURL: 'http://localhost:3000/',
  // baseURL: 'https://trello-clone-backend-2021.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
  // timeout: 30000
}

const instance = Axios.create(options)
export default instance
