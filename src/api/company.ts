import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/company/getList',
    method: 'get',
    params,
  })
}

export function getNodes() {
  return request({
    url: '/company/getNodes',
    method: 'get',
  })
}

export function doEdit(data) {
  return request({
    url: '/company/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data) {
  return request({
    url: '/company/doDelete',
    method: 'post',
    data,
  })
}
