import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPrefix } from '@/libs/utils'
import rest from '@/libs/services/rest.js'

const name = 'auth'

const initialState = {
  isLoading: false,
  success: false,
  errorMessage: '',
  user: null,
}

export const fetchUser = createAsyncThunk(getPrefix(name, 'fetchUser'), async () => {})
export const signup = createAsyncThunk(getPrefix(name, 'signup'), async (data) => {
  const res = await rest.post()
})
export const login = createAsyncThunk(getPrefix(name, 'login'), async () => {})

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = false
      state.success = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(signup.pending, (state) => {
        state.loading = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.errorMessage = action.payload.errorMessage
        state.loading = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        state.loading = false
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.errorMessage = action.payload.errorMessage
        state.loading = false
      })
  },
})

export const selectUser = (state) => state.auth.user

export const { logout } = authSlice.actions

export default authSlice.reducer
