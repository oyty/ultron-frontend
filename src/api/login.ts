import request from '@/utils/request'

export function sendCaptchaCode(data: any) {
  return request({
    url: '/getCaptchaCode',
    method: 'post',
    data,
  })
}
