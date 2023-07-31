import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPrefix } from '@/libs/utils/index.js'
import { API } from '@/libs/constants/api.js'
import rest from '@/libs/services/rest.js'

const name = 'event'

const initialState = {
  events: [],
  priorityHours: [],
  freePriorityHours: [],
  event: {},
}

const addPriorityHour = createAsyncThunk(getPrefix('name', 'addPriorityHour'), async (data) => {
  const response = await rest.post(API.EVENT, data)
  return response.data
})

const eventSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPriorityHour.fulfilled, (state, action) => {
      state.priorityHours = action.payload
    })
  },
})

export default eventSlice.reducer
