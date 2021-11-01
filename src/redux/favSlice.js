import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'favorite',
  initialState: {
    fav: false,
  },
  reducers: {
    setFav: (state, action) => { 
      state.fav = action.payload;
    },
  },
})

export const { setFav } = favSlice.actions

export default favSlice.reducer