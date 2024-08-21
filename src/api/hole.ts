import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/hole/getList',
    method: 'get',
    params,
  })
}
