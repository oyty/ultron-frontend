import request from '@/utils/request'

export function getList(params: any) {
  return request({
    url: '/menu/getList',
    method: 'get',
    params,
  })
}

export function getMenuNodes() {
  return request({
    url: '/menu/getNodes',
    method: 'get',
  })
}

export function doEdit(data: any) {
  return request({
    url: '/menu/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data: any) {
  return request({
    url: '/menu/doDelete',
    method: 'post',
    data,
  })
}
