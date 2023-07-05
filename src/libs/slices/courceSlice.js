import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNotification, getPrefix } from "@/libs/utils";
import rest from "../services/rest";

const name = 'cources';

const initialState = {
  cources: [],
  cource: {},
  status: '',
  loading: false,
  total: null
}

export const fetchCources = createAsyncThunk(getPrefix(name, 'fetchCources'), async () => {
  try {
    const response = await rest.get('https://single.uz/api/course?page=1&limit=10');
    return response.data;
  } catch (error) {
    addNotification(error);
  }
})

export const fetchSingleCource = createAsyncThunk(getPrefix(name, 'fetchSingleCource'), async (id) => {
  try {
    const response = await rest.get(`https://single.uz/api/course/${id}`);
    return response.data;
  } catch (error) {
    addNotification(error);
  }
});

const courcesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // Get all cources
    builder.addCase(fetchCources.pending, (state) => {
      state.loading = true;
      state.cources = [];
    });

    builder.addCase(fetchCources.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.cources = payload.data;
      state.total = payload.totalCount
    });

    builder.addCase(fetchCources.rejected, (state, { payload }) => {
      state.loading = false;
      state.cources = [];
      state.status = payload;
    });

    // Get single cource
    builder.addCase(fetchSingleCource.pending, (state) => {
      state.loading = true;
      state.cource = {};
    });

    builder.addCase(fetchSingleCource.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.cource = payload.data;
    });

    builder.addCase(fetchSingleCource.rejected, (state, { payload }) => {
      state.loading = false;
      state.cource = {};
      state.status = payload
    });
  }
})

export const courcesSelector = (state) => state.cources;
export const courceActions = courcesSlice.actions;

export default courcesSlice.reducer;