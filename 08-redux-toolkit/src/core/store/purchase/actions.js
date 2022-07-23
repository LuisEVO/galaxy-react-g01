import PurchaseHttp from '../../../features/purchase/http/purchase-http';
import { purchaseSlice } from './reducer';

const fetchStep1Params = () => {
  return (dispatch, getState) => {
    const { isParamsLoaded } = getState().purchase;

    if (isParamsLoaded) return;

    dispatch(PurchaseActions.loadStep1Params())
    
    PurchaseHttp.getStep1Params()
      .then(res => {
        dispatch(PurchaseActions.setStep1Params(res))
      })
  }
}

const PurchaseActions = {
  ...purchaseSlice.actions,
  fetchStep1Params
}

export default PurchaseActions