import request from '@/utils/request'

export function taskAdd(data?: any) {
  return request({
    url: '/task/taskAdd',
    method: 'post',
    data,
  })
}

export function getList(params?: any) {
  return request({
    url: '/task/getList',
    method: 'get',
    params,
  })
}

export function doEdit(data?: any) {
  return request({
    url: '/task/doEdit',
    method: 'post',
    data,
  })
}

export function doDelete(data?: any) {
  return request({
    url: '/task/doDelete',
    method: 'post',
    data,
  })
}
