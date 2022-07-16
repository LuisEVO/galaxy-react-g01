import Http from '../../../common/http';

const endpoint = 'http://localhost:3001/step-1'

const getStep1Params = () => {
  return Http.get(endpoint)
}

const PurchaseHttp = {
  getStep1Params
}

export default PurchaseHttp;