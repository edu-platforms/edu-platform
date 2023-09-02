import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPrefix } from '@/libs/utils/index.js'
import { API } from '@/libs/constants/api.js'
import rest from '@/libs/services/rest.js'

const name = 'teacher'

const initialState = {
  teachers: [],
  slots: [],
}

export const getTeachersList = createAsyncThunk(
  getPrefix('teacher', 'getTeachersList'),
  async (data) => {
    const response = await rest.get(API.TEACHER_LIST, data)
    return response.data.data
  }
)

export const getSlotList = createAsyncThunk(getPrefix('teacher', 'getSlotList'), async (data) => {
  const { tutorId, dateFrom, dateTo, statusName } = data
  const response = await rest.get(
    `${API.SLOTS_LIST}/${tutorId}?dateFrom=${dateFrom}&dateTo=${dateTo}&statusName=${statusName}`
  )
  return response.data.data
})

export const createEvent = createAsyncThunk(getPrefix('event', 'createEvent'), async (data) => {
  const response = await rest.post(API.EVENT, data.headers, data.body)
  return response.data.data
})

const teacherSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeachersList.fulfilled, (state, action) => {
      state.teachers = action.payload
    })
    builder.addCase(getSlotList.fulfilled, (state, action) => {
      state.slots = action.payload
    })
  },
})

export default teacherSlice.reducer
