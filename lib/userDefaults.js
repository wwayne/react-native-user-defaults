'use strict'

import { UserDefaults } from 'NativeModules'

const userDefaults = {
  set: (key, value, cb) => {
    const jsonValue = JSON.stringify(value)
    if (cb) {
      UserDefaults.setObject(key, jsonValue, (err, data) => {
        if (err) return cb(new Error(`Set fail for key: ${key}`))
        cb(null, data)
      })
      return
    }
    return new Promise((resolve, reject) => {
      UserDefaults.setObject(key, jsonValue, (err, data) => {
        if (err) return reject(new Error(`Set fail for key: ${key}`))
        resolve(data)
      })
    })
  },

  get: (key, cb) => {
    if (cb) {
      UserDefaults.getObject(key, (err, data) => {
        if (err) return cb(new Error(`Get fail for key: ${key}`))
        const result = JSON.parse(data)
        cb(null, result)
      })
      return
    }
    return new Promise((resolve, reject) => {
      UserDefaults.getObject(key, (err, data) => {
        if (err) return reject(new Error(`Get fail for key: ${key}`))
        const result = JSON.parse(data)
        resolve(result)
      })
    })
  },

  remove: (key, cb) => {
    if (cb) {
      UserDefaults.removeObject(key, (err, data) => {
        if (err) return cb(new Error(`Remove fail for key: ${key}`))
        cb(null, data)
      })
      return
    }
    return new Promise((resolve, reject) => {
      UserDefaults.removeObject(key, (err, data) => {
        if (err) return reject(new Error(`Remove fail for key: ${key}`))
        resolve(data)
      })
    })
  },

  empty: (cb) => {
    if (cb) {
      UserDefaults.empty((err, data) => {
        if (err) return cb(new Error('Empty fail'))
        cb(null, data)
      })
      return
    }
    return new Promise((resolve, reject) => {
      UserDefaults.empty((err, data) => {
        if (err) return reject(new Error('Empty fail'))
        resolve(data)
      })
    })
  }
}

export default userDefaults
