import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: localStorage.getItem('Token') || '',
  authSuccess: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      state.authSuccess = true;
    }
  }
})

export default authSlice.reducer;