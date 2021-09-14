import request from '@/utils/request'

export function getProducts() {
  return request({
    url: '/user/userLogin',
    method: 'GET',
  })
}
