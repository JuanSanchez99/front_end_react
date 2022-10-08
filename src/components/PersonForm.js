import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPerson, updatePerson } from "../features/personSlide";

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
      dispatch(updatePerson(person))
    }else{
      dispatch(addPerson(person));
    }
    
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="document_id"
        type="text"
        placeholder="Document ID"
        value={person && person.document_id}
        onChange={handleChange}
      />
      <input
        name="document_type"
        type="text"
        placeholder="Document type"
        value={person && person.document_type}
        onChange={handleChange}
      />
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={person && person.name}
        onChange={handleChange}
      />
      <input
        name="lastname"
        type="text"
        placeholder="Last name"
        value={person && person.lastname}
        onChange={handleChange}
      />
      <input
        name="hobbies"
        type="text"
        placeholder="Hobbies"
        value={person && person.hobbies}
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
}
