'use strict'

import React from 'react-native'
const {
  NativeModules: {
    UserDefaults,
  },
} = React

const userDefaults = {
  set: (key, value, suiteName, cb) => {
    const jsonValue = typeof value === 'string' || typeof value === 'number' ? value : JSON.stringify(value)
    return new Promise((resolve, reject) => {
      UserDefaults.setObject(key, jsonValue, suiteName, (err, data) => {
        if (err) {
          const error = new Error(`Set fail for key: ${key}`)
          cb && cb(error)
          reject(error)
        } else {
          cb && cb(null, data)
          resolve(data)
        }
      })
    });
  },

  get: (key, suiteName, cb) => {
    return new Promise((resolve, reject) => {
      UserDefaults.getObject(key, suiteName, (err, data) => {
        if (err) {
          const error = new Error(`Get fail for key: ${key}`)
          cb && cb(error)
          reject(error)
        } else {
          const result = typeof data === 'string' || typeof data === 'number' ? data : JSON.parse(data)
          cb && cb(null, result)
          resolve(result)
        }
      })
    })
  },

  remove: (key, suiteName, cb) => {
    return new Promise((resolve, reject) => {
      UserDefaults.removeObject(key, suiteName, (err, data) => {
        if (err) {
          const error = new Error(`Remove fail for key: ${key}`)
          cb && cb(error)
          reject(error)
        } else {
          cb && cb(null, data)
          resolve(data)
        }
      })
    })
  },

  empty: (suiteName, cb) => {
    return new Promise((resolve, reject) => {
      UserDefaults.empty(suiteName, (err, data) => {
        if (err) {
          const error = new Error('Empty fail')
          cb && cb(error)
          reject(error)
        } else {
          cb && cb(null, data)
          resolve(data)
        }
      })
    })
  }
}

export default userDefaults
