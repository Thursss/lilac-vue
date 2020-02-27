import instance from '@/api/service.js'

function getSubList(params = {}){
  return instance({
    url: '/dashboard/sub',
    method: 'get',
    params: params
  })
}
export { getSubList }