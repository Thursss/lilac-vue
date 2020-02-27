import instance from '@/api/service.js'

function getDocList(params = {}){
  return instance({
    url: '/dashboard/docs',
    method: 'get',
    params: params
  })
}
export { getDocList }