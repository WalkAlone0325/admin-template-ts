import { MockMethod } from 'vite-plugin-mock'

const mapList = (): any => {
  const result: any[] = []
  for (let i = 0; i < 200; i++) {
    result.push({
      plateNumber: "独行@natural(11111, 99999)@character('upper')",
      driver: '@cname()',
      'lng|113-114.1-10': 1,
      'lat|34-35.1-10': 1,
    })
  }
  return result
}

export default [
  {
    url: '/getMapInfo',
    method: 'get',
    response: () => {
      return {
        code: 0,
        info: mapList(),
      }
    },
  },
] as MockMethod[]
