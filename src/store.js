import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

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
    }

  }
})
