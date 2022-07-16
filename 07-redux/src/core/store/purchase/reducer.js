import { PURCHASE_ACTIONS } from './actions'

const initialState = {
  step1: {
    plan: '',
    account: ''
  },
  step2: {
    termsConditions: false,
    offers: false
  },
  params: {
    plans: [],
    accounts: []
  },
  isParamsLoaded: false,
  isParamsLoading: false,
}

const purchaseReducer = (state = initialState, action) => {
  switch(action.type) {
    case PURCHASE_ACTIONS.SET_STEP_1:
      return {
        ...state,
        step1: action.payload
      }

    case PURCHASE_ACTIONS.SET_STEP_2:
      return {
        ...state,
        step2: action.payload
      }

    case PURCHASE_ACTIONS.SET_STEP_1_PARAMS:
      return {
        ...state,
        params: action.payload,
        isParamsLoaded: true,
        isParamsLoading: false
      }

    case PURCHASE_ACTIONS.LOAD_STEP_1_PARAMS:
      return {
        ...state,
        isParamsLoading: true
      }

    default:
      return { ...state }
  }
}

export default purchaseReducer;