import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    employee: [],

  },
  mutations: {

  },
  actions: {

    getResource({commit}){
      return new Promise(function(resolve, reject){
        axios.get('http://localhost:8080/resources')
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    deleteResource({commit}, data) {
      return new Promise(function(resolve, reject){
        axios.delete('http://localhost:8080/resource/delete/' + data)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    getClients({commit}){
      return new Promise(function(resolve, reject){
        axios.get('http://localhost:8080/clients')
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    deleteClient({commit}, data) {
      return new Promise(function(resolve, reject){
        axios.delete('http://localhost:8080/client/delete/' + data)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    getProjects({commit}){
      return new Promise(function(resolve, reject){
        axios.get('http://localhost:8080/projects')
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    deleteProject({commit}, data) {
      return new Promise(function(resolve, reject){
        axios.delete('http://localhost:8080/project/delete/' + data)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    getTimesheet({commit}){
      return new Promise(function(resolve, reject){
        axios.get('http://localhost:8080/timesheet')
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    createClient({commit}, params) {
    return new Promise(function(resolve, reject){
        axios.post('http://localhost:8080/client/new', params)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getHolidays({commit}) {
      console.log('calling....')
      return new Promise(function(resolve, reject){
        axios.get('http://localhost:8080/holidays')
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getEmployee({commit}) {
      console.log('calling....')
      return new Promise(function(resolve, reject){
        axios.get('http://localhost:8000/api/user/list')
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    deleteEmployee({commit}, userId) {
      return new Promise(function(resolve, reject){
        axios.delete(`http://localhost:8000/api/user/delete/${userId}`)
        .then(resp => {
          console.log('issue'+ resp)
          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    },
    createEmployee({commit}, params) {
      return new Promise(function(resolve, reject){
        axios.post(`http://localhost:8000/api/user/create`, params)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    getEmployeeInfo({commit}, id) {
      return new Promise(function(resolve, reject){
        axios.get(`http://localhost:8000/api/user/detail/${id}`)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
    editEmployee({commit}, params) {
      return new Promise(function(resolve, reject){
        axios.put(`http://localhost:8000/api/user/edit/${params.id}`, params)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
      })
    }
  }
})
