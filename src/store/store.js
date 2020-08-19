import { configureStore } from '@reduxjs/toolkit'
import retireReducer from 'views/RetireCal/RetireSlice'

export default configureStore({
  reducer: {
    retire: retireReducer
  }
})
