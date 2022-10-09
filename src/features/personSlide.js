import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../utils";

const initialState = {
  loading: false,
  people: [],
  error: '',
}

export const fetchPeople = createAsyncThunk('person/fetchPeople', async () => {
  try {
    const res = await api.get('/people/')
    return res.data
  } catch (err) {
    return err.message
  }
})

export const addNewPerson = createAsyncThunk('person/addNewPerson', async (newPerson) => {
  try {
    const res = await api.post('/people/', newPerson)
    return res.data
  } catch (err) {
    return err.message
  }
})

export const deletePerson = createAsyncThunk('person/deletePerson', async (person_id) => {
  try {
    const res = await api.delete(`/people/${person_id}/`)
    return person_id
  } catch (err) {
    return err.message
  }
})

export const updatePerson = createAsyncThunk('person/updatePerson', async (updatePerson) => {
  try {
    const res = await api.put(`/people/${updatePerson.id}/`, updatePerson)
    return res.data
  } catch (err) {
    return err.message
  }
})

export const personSlide = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.loading = false
      state.people = action.payload
      state.error = ''
    })
    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.loading = false
      state.people = []
      state.error = action.error.message
    })
    builder.addCase(addNewPerson.fulfilled, (state, action) => {
      state.people.push(action.payload);
    })
    builder.addCase(deletePerson.fulfilled, (state, action) => {
      const personFound = state.people.find((person) => person.id === action.payload);
      if (personFound) state.people.splice(state.people.indexOf(personFound), 1);
    })
    builder.addCase(updatePerson.fulfilled, (state, action) => {
      const { id, document_type, document_id, name, lastname, hobbies } =
        action.payload;
      const personFound = state.people.find(
        (person) => person.id === id
      );
      if (personFound) {
        personFound.id = id;
        personFound.document_type = document_type;
        personFound.document_id = document_id;
        personFound.name = name;
        personFound.lastname = lastname;
        personFound.hobbies = hobbies;
      }
    })
  }
});

export default personSlide.reducer;
