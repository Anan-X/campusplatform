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

// 用户密码修改
export function apiEditPass (data) {
  return request ({
    url: '/users/password',
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
// 获取学期
export function apiGetSemester () {
  return request({
    url: '/users/semester',
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



// 获取说说数据 
export function apiSpace(index) {
  return request({
    url: '/users/space',
    method:'get',
    params: {
      index
    }
  })
}
// 查看自己发的说说
export function apiSpaceMine(index, user_id) {
  return request({
    url: '/users/space_mine',
    method:'get',
    params: {
      index,
      user_id
    }
  })
}
// 发表说说
export function apiShare(user_id, imgs, text) {
  return request({
    url: '/users/share',
    method:'post',
    data: {
      user_id,
      imgs,
      text
    }
  })
}
// 发表评论
export function apiSendMsg(space_id,user_id, msg) {
  return request({
    url: '/users/space_send_msg',
    method:'post',
    data: {
      space_id,
      user_id,
      msg
    }
  })
}
// 发表评论
export function apiDeleteSpace(space_id) {
  return request({
    url: '/users/space_delete',
    method:'post',
    data: {
      space_id
    }
  })
}
