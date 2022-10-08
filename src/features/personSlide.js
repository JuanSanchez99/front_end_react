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
    addPerson: (state, action) => {
      state.push(action.payload);
    },
    deletePerson: (state, action) => {
      const personFound = state.find((person) => person.id === action.payload);
      if (personFound) state.splice(state.indexOf(personFound), 1);
    },
    updatePerson: (state, action) => {
      const { id, document_type, document_id, name, lastname, hobbies } =
        action.payload;
      const personFound = state.find(
        (person) => person.id === action.payload.id
      );
      if (personFound) {
        personFound.id = id;
        personFound.document_type = document_type;
        personFound.document_id = document_id;
        personFound.name = name;
        personFound.lastname = lastname;
        personFound.hobbies = hobbies;
      }
    },
  },
});

export const { addPerson, deletePerson, updatePerson } = personSlide.actions;

export default personSlide.reducer;
