import {configureStore} from '@reduxjs/toolkit'
import reducer from '../util/createSlice.jsx'


export const store= configureStore({
  reducer: {
    user:reducer
  }
});
 