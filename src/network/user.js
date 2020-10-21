import {request} from './request'

// 密码登陆请求
export function login (data) {
  return request({
    url: '/users/login',
    method: 'post',
    data
  })
}
// 手机号登陆请求
export function Phonelogin (data) {
  return request({
    url: '/users/phoneLogin',
    method: 'post',
    data
  })
}

// 修改用户信息请求
export function userInfoEdit (data) {
  return request({
    url: '/users/userInfoEdit',
    method: 'post',
    data
  })
}

// 发送手机验证码请求
export function getPhoneCode (phone) {
  return request({
    url: '/users/sendPhoneCode',
    method: 'get',
    params: {
      phone
    }
  })
}

// 查询用户名是否被注册请求
export function isUserName (username) {
  return request({
    url: '/users/isUserName',
    method: 'get',
    params: {
      username
    }
  })
}

// 查询手机号是否已被注册
export function apiIsPhone (phone) {
  return request({
    url: '/users/isPhone',
    method: 'get',
    params: {
      phone
    }
  })
}

// 用户注册接口
export function apiResiger (data) {
  return request({
    url: '/users/resiger',
    method: 'post',
    data
  })
}

// 获取用户基本信息
export function apiGetUserInfo () {
  return request({
    url: '/users/apiGetUserInfo',
    method: 'get',
  })
}

// 获取学生表信息
export function apiGetStudentInfo () {
  return request({
    url: '/users/apiGetStudentInfo',
    method: 'get'
  })
}

// 获取学生成绩
export function apiGetStudentScore (student_id, semester_id) {
  return request({
    url: '/users/getScore',
    method: 'get',
    params: {
      student_id,
      semester_id
    }
  })
}

// 获取学生课表
export function apiGetCourse(student_id, weekth, day) {
  return request({
    url: '/users/apicourse',
    method:'get',
    params: {
      student_id,
      weekth,
      day
    }
  })
}