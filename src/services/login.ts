import request from '@/utils/request'

/**
 * 登录
 */
export function login(account, password, sign) {
  const data = {
    account,
    password,
    sign,
  }
  return request({
    url: '/user/userLogin',
    method: 'post',
    data: data,
  })
}
