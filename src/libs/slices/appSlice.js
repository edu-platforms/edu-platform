import { createSelector, createSlice } from '@reduxjs/toolkit'

const name = 'app'

const initialState = {
  activeModals: [],
  modalData: {},
}

const appSlice = createSlice({
  name,
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.activeModals = [...state.activeModals, action.payload]
    },
    setModalData: (state, action) => {
      state.modalData = { ...state.modalData, [action.payload.type]: action.payload.modalData }
    },
    hideModal: (state, action) => {
      state.activeModals = state.activeModals.filter((modalType) => modalType !== action.payload)

      delete state.modalData[action.payload]
    },
  },
})

export const { hideModal, showModal, setModalData } = appSlice.actions

export const selectActiveModals = (state) => state.app.activeModals

export const selectModalData = (state) => state.app.modalData

export const selectIsModalVisible = createSelector(
  selectActiveModals,
  (modals) => (modalType) => modals.includes(modalType)
)
export const selectModalDataByType = createSelector(
  selectModalData,
  (modalData) => (modalType) => modalData[modalType] || {}
)

export default appSlice.reducer
