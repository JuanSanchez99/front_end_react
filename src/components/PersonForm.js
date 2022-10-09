import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addNewPerson, updatePerson } from "../features/personSlide";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function PersonForm({ person, setPerson }) {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      await dispatch(updatePerson(person));
    } else {
      await dispatch(addNewPerson(person));
    }

    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <TextField
        name="document_id"
        type="text"
        label="Document ID"
        value={person && person.document_id}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
      <InputLabel id="demo-simple-select-label">Document type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Document type"
        name="document_type"
        onChange={handleChange}
        fullWidth
        value={person && person.document_type}
      >
        <MenuItem value={'CC'}>Cedula De ciudadania</MenuItem>
        <MenuItem value={'TI'}>Tarjeta de identidad</MenuItem>
      </Select>
      <TextField
        name="name"
        type="text"
        label="Name"
        value={person && person.name}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
      <TextField
        name="lastname"
        type="text"
        label="Last name"
        value={person && person.lastname}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
      <TextField
        name="hobbies"
        type="text"
        label="Hobbies"
        value={person && person.hobbies}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Send
      </Button>
    </form>
  );
}
