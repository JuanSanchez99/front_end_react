import React from "react";
import PersonForm from "../components/PersonForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function Person() {
  const params = useParams();
  const people = useSelector((state) => state.people);
  const [person, setPerson] = useState({
    document_type: "",
    document_id: "",
    name: "",
    lastname: "",
    hobbies: "",
  });
  useEffect(() => {
    if (params.id) {
      setPerson(people.people.find((item) => item.id == params.id));
    }
  }, []);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {params.id ? `Person #${person.id}`: "New Person"}
          </Typography>
        </Toolbar>
      </AppBar>
      <PersonForm person={person} setPerson={setPerson} />
    </>
  );
}
