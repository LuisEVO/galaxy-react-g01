import PurchaseHttp from '../../../features/purchase/http/purchase-http'
import PurchaseSelector from './selector'

export const PURCHASE_ACTIONS = {
  SET_STEP_1: '[PURCHASE] SET STEP 1',
  SET_STEP_2: '[PURCHASE] SET STEP 2',
  SET_STEP_1_PARAMS: '[PURCHASE] SET STEP 1 PARAMS',
  LOAD_STEP_1_PARAMS: '[PURCHASE] Loading'
}

const setStep1 = (payload) => ({ type: PURCHASE_ACTIONS.SET_STEP_1, payload }) 
const setStep2 = (payload) => ({ type: PURCHASE_ACTIONS.SET_STEP_2, payload }) 
const setStep1Params = (payload) => ({ type: PURCHASE_ACTIONS.SET_STEP_1_PARAMS, payload }) 
const startLoadingStep1Params = () => ({ type: PURCHASE_ACTIONS.LOAD_STEP_1_PARAMS }) 

const loadStep1Params = () => {
  return (dispatch, getState) => {
    const { isParamsLoaded } = getState().purchase;

    if (isParamsLoaded) return;

    dispatch(startLoadingStep1Params())
    
    PurchaseHttp.getStep1Params()
      .then(res => {
        dispatch(setStep1Params(res))
      })
  }
}

const PurchaseActions = {
  setStep1,
  setStep2,
  setStep1Params,
  loadStep1Params
}

export default PurchaseActions