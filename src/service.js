import axios from 'axios';

// require('dotenv').config();
// const apiUrl = process.env.REACT_APP_API_URL
// console.log(process.env.API_URL);

import config from './config.defualt';
const {apiUrl}=config;

//const apiUrl = "http://localhost:5152"


axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`${apiUrl}/items`,{
    "Name":name,
    "IsComplete":false
  })    
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
     await axios.put(`${apiUrl}/items/${id}?IsComplete=${isComplete}`)
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await axios.delete(`${apiUrl}/items/${id}`)
  }
};
