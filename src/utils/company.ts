import { storage } from '@/config'
import cookie from 'js-cookie'

const companyCacheName = 'selected-company'
export function getSelectedCompanyId() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(companyCacheName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(companyCacheName)
    } else if ('cookie' === storage) {
      return cookie.get(companyCacheName)
    } else {
      return localStorage.getItem(companyCacheName)
    }
  } else {
    return localStorage.getItem(companyCacheName)
  }
}

/**
 * @param token
 * @returns {void|*}
 */
export function setSelectedCompanyId(token: string) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(companyCacheName, token)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(companyCacheName, token)
    } else if ('cookie' === storage) {
      return cookie.set(companyCacheName, token)
    } else {
      return localStorage.setItem(companyCacheName, token)
    }
  } else {
    return localStorage.setItem(companyCacheName, token)
  }
}

/**
 * @returns {void|Promise<void>}
 */
export function removeSelectedCompanyId() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(companyCacheName)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear()
    } else if ('cookie' === storage) {
      return cookie.remove(companyCacheName)
    } else {
      return localStorage.removeItem(companyCacheName)
    }
  } else {
    return localStorage.removeItem(companyCacheName)
  }
}
