import request from '@/utils/request'

export function getList(params: any) {
  return request({
    url: '/role/getList',
    method: 'get',
    params,
  })
}

export function getRoleNodes() {
  return request({
    url: '/role/getNodes',
    method: 'get',
  })
}

export function doEdit(data: any) {
  return request({
    url: '/role/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data: any) {
  return request({
    url: '/role/doDelete',
    method: 'post',
    data,
  })
}
