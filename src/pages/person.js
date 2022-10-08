import React from "react";
import PersonForm from "../components/PersonForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
      setPerson(
        people.find((item) => item.id == params.id)
      );
    }
  }, []);
  return (
    <>
      <PersonForm person={person} setPerson={setPerson} />
    </>
  );
}
