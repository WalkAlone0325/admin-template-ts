/**
 * 设置cookie
 * @param key 键名
 * @param value 键值
 * @param expiremHours 过期时间
 */
export function setCookie(key: string, value: string, expiremHours: number) {
  const exdate = new Date()
  exdate.setTime(exdate.getTime() + expiremHours * 60 * 60 * 1000)
  document.cookie =
    key + '=' + escape(value) + (expiremHours == null ? '' : ';expires=' + exdate.toUTCString())
}

/**
 * 获取cookie
 * @param key 键名
 * @returns
 */
export function getCookie(key: string | any[]) {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(key + '=')
    if (c_start !== -1) {
      c_start = c_start + key.length + 1
      let c_end = document.cookie.indexOf(';', c_start)
      if (c_end === -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end))
    }
  }
  return ''
}

/**
 * 删除 cookie
 * @param this
 * @param key 键名
 */
export function delCookie(key: string) {
  const exp = new Date()
  exp.setTime(exp.getTime() - 1)
  const cval = getCookie(key)
  if (cval != null) {
    document.cookie = key + '=' + cval + ';expires=' + exp.toUTCString()
  }
}

/**
 * 节流
 * @param cb 回调函数
 * @param time 延时时间
 * @returns
 */
export function throttle(cb: () => void, time: number | undefined) {
  let timer: NodeJS.Timeout | null = null

  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        cb()
        timer = null
      }, time)
    }
  }
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str: string): boolean {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
