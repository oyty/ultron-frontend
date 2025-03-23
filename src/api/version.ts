import request from '@/utils/request'
export function getVersionList(params) {
  return request({
    url: '/version/getList',
    method: 'get',
    params,
  })
}

export function doVersionEdit(data) {
  return request({
    url: '/version/doEdit',
    method: 'post',
    data,
  })
}

export function doVersionDelete(data) {
  return request({
    url: '/version/doDelete',
    method: 'post',
    data,
  })
}

export function setVersionStatus(data) {
  return request({
    url: '/version/setStatus',
    method: 'post',
    data,
  })
}
