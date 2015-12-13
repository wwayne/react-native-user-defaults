'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _NativeModules=require(

'NativeModules');

var userDefaults={
set:function set(key,value,cb){
var jsonValue=JSON.stringify(value);
if(cb){
_NativeModules.UserDefaults.setObject(key,jsonValue,function(err,data){
if(err)return cb(new Error('Set fail for key: ' + key));
cb(null,data);});

return;}

return new Promise(function(resolve,reject){
_NativeModules.UserDefaults.setObject(key,jsonValue,function(err,data){
if(err)return reject(new Error('Set fail for key: ' + key));
resolve(data);});});},




get:function get(key,cb){
if(cb){
_NativeModules.UserDefaults.getObject(key,function(err,data){
if(err)return cb(new Error('Get fail for key: ' + key));
var result=JSON.parse(data);
cb(null,result);});

return;}

return new Promise(function(resolve,reject){
_NativeModules.UserDefaults.getObject(key,function(err,data){
if(err)return reject(new Error('Get fail for key: ' + key));
var result=JSON.parse(data);
resolve(result);});});},




remove:function remove(key,cb){
if(cb){
_NativeModules.UserDefaults.removeObject(key,function(err,data){
if(err)return cb(new Error('Remove fail for key: ' + key));
cb(null,data);});

return;}

return new Promise(function(resolve,reject){
_NativeModules.UserDefaults.removeObject(key,function(err,data){
if(err)return reject(new Error('Remove fail for key: ' + key));
resolve(data);});});},




empty:function empty(cb){
if(cb){
_NativeModules.UserDefaults.empty(function(err,data){
if(err)return cb(new Error('Empty fail'));
cb(null,data);});

return;}

return new Promise(function(resolve,reject){
_NativeModules.UserDefaults.empty(function(err,data){
if(err)return reject(new Error('Empty fail'));
resolve(data);});});}};exports['default'] = 





userDefaults;module.exports = exports['default'];

