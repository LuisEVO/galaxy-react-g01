import { createSlice } from '@reduxjs/toolkit'

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

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    setStep1: (state, action) => {
      state.step1 = action.payload
    },
    setStep2: (state, action) => {
      state.step2 = action.payload
    },
    loadStep1Params: (state) => {
      state.isParamsLoading = true
    },
    setStep1Params: (state, action) => {
      state.isParamsLoading = false
      state.isParamsLoaded = true
      state.params =  action.payload
    }
  }
})

export default purchaseSlice.reducer;