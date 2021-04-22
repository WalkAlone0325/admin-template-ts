type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

const regExps = (value: string, reg: string) => {
  return value.replace(new RegExp(reg, 'g'), '')
}

export function createProxy(list: ProxyList = []) {
  const ret = {}
  for (const [prefix, target] of list) {
    ret[prefix] = {
      target,
      changeOrigin: true,
      rewrite: (path: string) => regExps(path, prefix),
    }
  }

  return ret
}
