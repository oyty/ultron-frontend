import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/device/getList',
    method: 'get',
    params,
  })
}

export function getNodes() {
  return request({
    url: '/device/getNodes',
    method: 'get',
  })
}

export function doDelete(data) {
  return request({
    url: '/device/doDelete',
    method: 'post',
    data,
  })
}
