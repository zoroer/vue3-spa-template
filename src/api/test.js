import request from '@utils/request'

export function test(params) {
  return request({
    url: 'https://foodshops.fun/h5/sale/noauth/shop/getCategory',
    method: 'get',
    params
  })
}
