import request from '@/utils/request'

export function getCompanyNodes(params?: any) {
  return request({
    url: '/company/getNodes',
    method: 'get',
    params,
  })
}

export function getUnBindDeviceNodes(params?: any) {
  return request({
    url: '/device/unbindNodes',
    method: 'get',
    params,
  })
}

export function doDeviceLink(data?: any) {
  return request({
    url: '/bind/doEdit',
    method: 'post',
    data,
  })
}
