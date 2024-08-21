import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/bind/getList',
    method: 'get',
    params,
  })
}

export function doDelete(data) {
  return request({
    url: '/bind/doDelete',
    method: 'post',
    data,
  })
}
