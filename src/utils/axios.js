import Axios from 'axios'
// import { store } from '../store'

// console.log(store.state.user)

const options = {
  baseURL: process.env.NODE_ENV === 'production' ? 'https://trello-clone-backend-2021.herokuapp.com/' : 'http://localhost:3000/',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  withCredentials: true
}

// Axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token')
//   config.headers.Authorization = 'Bearer ' + token
//   // config.headers = Object.assign({
//   //   Authorization: `Bearer ${token}`
//   // }, config.headers)
//   return config
// })
const instance = Axios.create(options)
export default instance
