import Http from '../../../common/http';

const endpoint = 'http://localhost:3001/products'; 

/**
 * 
 * {
 *  data_id
 *  product_active
 * } 
 * 
 */

const getAll = () => {
  return Http.get(endpoint)
}

const getOne = (id) => {
  return Http.get(`${endpoint}/${id}`)
}

const create = (body) => {
  return Http.post(endpoint, body)
}

const update = (id, body) => {
  return Http.put(`${endpoint}/${id}`, body)
}

const remove = (id) => {
  return Http.delete(`${endpoint}/${id}`)
}

const ProductHttp = {
  getAll,
  getOne,
  create,
  update,
  remove
}

export default ProductHttp;