import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPrefix } from '@/libs/utils/index.js'
import rest from '@/libs/services/rest.js'
import { API } from '@/libs/constants/api.js'
import { LoadingStatus } from '@/model/common.js'

const name = 'profile'

const initialState = {
  user: null,
  profileLoaded: false,
  status: LoadingStatus.idle,
  isProfileLoaded: false,
}

export const fetchUser = createAsyncThunk(getPrefix(name, 'fetchUser'), async () => {
  const response = await rest.get(API.USER)
  return response.data
})
export const updateUser = createAsyncThunk(getPrefix(name, 'updateUser'), async (data) => {
  const response = await rest.post(API.USER, data)
  return response.data
})

export const profileSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.status = LoadingStatus.idle
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = LoadingStatus.pending
      })
      .addCase(fetchUser.rejected, (state) => {
        state.user = null
        state.status = LoadingStatus.rejected
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.status = LoadingStatus.idle
      })
  },
})

export default profileSlice.reducer
