import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "../features/personSlide";

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  },
});
