import request from '@/utils/request'

export function updateCoordinateConfig(data?: any) {
  return request({
    url: '/config/coordinate/update',
    method: 'post',
    data,
  })
}

export function getCoordinateConfig(params?: any) {
  return request({
    url: '/config/coordinate/params',
    method: 'get',
    params,
  })
}

export function getReasons(params?: any) {
  return request({
    url: '/config/reason/list',
    method: 'get',
    params,
  })
}

export function reasonDelete(data?: any) {
  return request({
    url: '/config/reason/destroy',
    method: 'post',
    data,
  })
}

export function reasonAdd(data?: any) {
  return request({
    url: '/config/reason/add',
    method: 'post',
    data,
  })
}
