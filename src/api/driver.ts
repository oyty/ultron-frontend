import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/driver/getList',
    method: 'get',
    params,
  })
}

export function doEdit(data) {
  return request({
    url: '/driver/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/driver/doDelete',
    method: 'post',
    data,
  })
}
