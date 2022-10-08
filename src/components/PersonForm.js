import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPerson, updatePerson } from "../features/personSlide";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(updatePerson(person));
    } else {
      dispatch(addPerson(person));
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
      <TextField
        name="document_type"
        type="text"
        label="Document type"
        value={person && person.document_type}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
      />
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
