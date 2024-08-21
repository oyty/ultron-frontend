import request from '@/utils/request'

export function updateConfig(data?: any) {
  return request({
    url: '/config/update',
    method: 'post',
    data,
  })
}

export function getConfig(params?: any) {
  return request({
    url: '/config/fetch',
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
