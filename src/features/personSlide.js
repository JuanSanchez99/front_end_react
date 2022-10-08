import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    document_type: "TI",
    document_id: "1234567890",
    name: "Juan",
    lastname: "Sanchez",
    hobbies: "Play",
  },
  {
    id: 2,
    document_type: "CC",
    document_id: "0234567891",
    name: "Jhon",
    lastname: "Sanchez",
    hobbies: "Play",
  },
];

export const personSlide = createSlice({
  name: "people",
  initialState,
  reducers: {
    
  },
});

export default personSlide.reducer;
