import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPrefix } from '@/libs/utils'

const name = 'auth'

const initialState = {
  isLoading: false,
  success: false,
  errorMessage: '',
}

export const fetchUser = createAsyncThunk(getPrefix(name, 'fetchUser'), async () => {})

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = false
      state.success = false
    },
  },
  extraReducers: (builder) => {},
})

export const { logout } = authSlice.actions

export default authSlice.reducer
