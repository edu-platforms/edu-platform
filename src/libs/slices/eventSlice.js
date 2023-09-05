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

export const addPriorityHour = createAsyncThunk(
  getPrefix('name', 'addPriorityHour'),
  async (option) => {
    const response = await rest.post(API.EVENT_ADD, option)
    return response.data
  }
)

export const getPriorityHours = createAsyncThunk(
  getPrefix('name', 'getPriorityHours'),
  async (tutorId) => {
    const { data } = await rest.get(`${API.EVENT_ALL_ID}/${tutorId}`)
    return data.data
  }
)

const eventSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPriorityHour.fulfilled, (state, action) => {
        state.priorityHours = action.payload
      })
      .addCase(getPriorityHours.fulfilled, (state, actions) => {
        state.events = actions.payload
      })
  },
})

export const getMyEvents = (state) => state.event
export default eventSlice.reducer
