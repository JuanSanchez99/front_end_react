import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PeopleTable from "../components/PeopleTable";
import { useDispatch } from "react-redux";
import { fetchPeople } from "../features/personSlide";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

export default function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPeople())
  }, [])
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Table People
          </Typography>
          <Button color="inherit" onClick={() => navigate("/new-person")}>
            Add person
          </Button>
        </Toolbar>
      </AppBar>
      <PeopleTable />
    </>
  );
}
