import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieSlice"
import personReducer from './reducers/personSlice';
import tvReducer from './reducers/tvSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
    reducer : {
        user : userReducer,
        movie: movieReducer,
        person : personReducer,
        tv : tvReducer,
       
    }
})