import Axios from 'axios'

const options = {
  baseURL: process.env.NODE_ENV === 'production' ? 'https://trello-clone-backend-2021.herokuapp.com/' : 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}
const instance = Axios.create(options)
export default instance
