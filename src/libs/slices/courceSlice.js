import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPrefix } from "@/libs/utils";
import rest from "../services/rest";

const name = 'cources';

const initialState = {
  data: {
    cources: [],
    cource: {}
  },
  status: '',
  loading: false,
  total: null
}

export const fetchCources = createAsyncThunk(getPrefix(name, 'fetchCources'), async () => {
  const response = await rest.get('https://single.uz/api/course?page=1&limit=10');
  // API_URL is not working in rest.js
  return response.data;
})

export const fetchSingleCource = createAsyncThunk(getPrefix(name, 'fetchSingleCource'), async (id) => {
  const response = await rest.get(`https://single.uz/api/course/${id}`);
  return response.data;
})

const courcesSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // Get all cources
    builder.addCase(fetchCources.pending, (state) => {
      state.loading = true;
      state.data.cources = [];
    });

    builder.addCase(fetchCources.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data.cources = payload.data;
      state.total = payload.totalCount
    });
    
    builder.addCase(fetchCources.rejected, (state, { payload }) => {
      state.loading = false;
      state.data.cources = [];
      state.status = payload;
    });

    // Get single cource
    builder.addCase(fetchSingleCource.pending, (state) => {
      state.loading = true;
      state.data.cource = {};
    });

    builder.addCase(fetchSingleCource.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data.cource = payload.data;
    });

    builder.addCase(fetchSingleCource.rejected, (state, { payload }) => {
      state.loading = false;
      state.data.cource = {};
      state.status = payload
    });
  }
})

export const courcesSelector = (state) => state.cources;
export const courceSelector = (state) => state.cource;
export const courceActions = courcesSlice.actions;

export default courcesSlice.reducer;