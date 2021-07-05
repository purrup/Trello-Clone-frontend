import Axios from 'axios'

Axios.defaults.headers.common = { 'Authorization': 'Bearer ' + localStorage.getItem('token') }
const options = {
  baseURL: process.env.NODE_ENV === 'production' ? 'https://trello-clone-backend-2021.herokuapp.com/' : 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}
const instance = Axios.create(options)
export default instance
