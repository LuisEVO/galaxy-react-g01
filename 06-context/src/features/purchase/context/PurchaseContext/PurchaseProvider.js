import React, { useReducer, useEffect } from 'react'
import PurchaseContext from './PurchaseContext';

const PURCHASE_ACTIONS = {
  SET_STEP_1: '[PURCHASE] SET STEP 1',
  SET_STEP_2: '[PURCHASE] SET STEP 2'
}

const initialState = {
  step1: {
    plan: '',
    account: ''
  },
  step2: {
    termsConditions: false,
    offers: false
  }
}

/**
 * 
 * @param {*} state es un valor. Regla no mutar
 * @param {*} action un objeto con la propiedad `type` que es una descripcion, un propiedad `payload` que es cualquier informacion adicional 
 */
const purchaseReducer = (state, action) => {
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

    default:
      return { ...state }
  }
}

const setStep1 = (payload) => ({ type: PURCHASE_ACTIONS.SET_STEP_1, payload }) 
const setStep2 = (payload) => ({ type: PURCHASE_ACTIONS.SET_STEP_2, payload }) 

export const PurchaseActions = {
  setStep1,
  setStep2
}

const PurchaseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(purchaseReducer, initialState)

  return (
    <PurchaseContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </PurchaseContext.Provider>
  )
}

export default PurchaseProvider