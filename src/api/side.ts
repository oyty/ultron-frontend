import request from '@/utils/request'

export function doSideEdit(data: any) {
  return request({
    url: '/side/doEdit',
    method: 'post',
    data,
  })
}
export function doSideTaskReset(data: any) {
  return request({
    url: '/side/task/resetTask',
    method: 'post',
    data,
  })
}
export function getSideList(params: any) {
  return request({
    url: '/side/getList',
    method: 'get',
    params,
  })
}

export function getTaskList(params: any) {
  return request({
    url: '/side/task/getList',
    method: 'get',
    params,
  })
}
