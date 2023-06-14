import { createSlice } from '@reduxjs/toolkit'

import { removeLocalStorage } from '@/libs/utils'

const initialState = {
  user: {
    whom: '',
    email: '',
    password: '',
  },
  teacher: {
    user_displayname: '',
    user_accent: '',
    user_from: '',
    user_current_location: '',
    user_birthday: '',
    user_firstname: '',
    user_lastname: '',
    user_gender: '',
    user_photo: '',
    user_about: '',
    education: [],
    exprience: [],
    certificates: [],
  },
  loading: false,
  data: null,
  token: null,
  id: '',
  error: null,
  isAuth: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload
    },

    setType: (state, { payload }) => {
      state.user.whom = payload
    },

    setLogin: (state, { payload }) => {
      state.user.email = payload.email
      state.user.password = payload.password
    },

    // setFullName:

    setToken: (state, { payload }) => {
      state.token = payload
    },

    setId: (state, { payload }) => {
      state.id = payload
    },

    setAuth: (state, { payload }) => {
      state.isAuth = payload
    },

    setPersonal: (state, { payload }) => {
      state.teacher.user_firstname = payload.first_name
      state.teacher.user_lastname = payload.last_name
      state.teacher.user_accent = payload.accent
      state.teacher.user_from = payload.from
      state.teacher.user_gender = payload.gender ? (payload.gender === 1 ? 'man' : 'woman') : ('none')
      state.teacher.user_current_location = payload.living
      state.teacher.user_displayname = payload.number
      state.teacher.user_birthday = payload.birthday
      state.teacher.user_photo = payload.file
      if (payload.birthday) {
        state.teacher.birthday = +new Date(payload.birthday.$d / 1000)
      }
    },

    setProfile: (state, { payload }) => {
      state.teacher.about = payload.about
      state.teacher.me = payload.me
    },

    setEducation: (state, { payload }) => {
      state.teacher.education = payload
    },

    setExprience: (state, { payload }) => {
      state.teacher.exprience = payload
    },
    setCertificates: (state, { payload }) => {
      state.teacher.certificates = payload
    },
    logout: (state) => {
      removeLocalStorage('access-token')
      state.token = null
      state.loading = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
  },
})

const { reducer, actions } = authSlice

export const authSelector = (state) => state.auth

export const {
  setLoading,
  setId,
  logout,
  setAuth,
  setType,
  setToken,
  setLogin,
  setPersonal,
  setProfile,
  setEducation,
  setExprience,
  setCertificates,
} = actions

export default reducer
