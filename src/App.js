import React from "react";
import "./App.css";
import "typeface-roboto";

import { Navbar } from "./components/Navbar";

import Container from "@material-ui/core/Container";
import { Biography } from "./components/Biography";
import { Resume } from "./components/Resume";
import { ProjectList } from "./components/ProjectList";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container
        maxWidth="sm"
        style={{ paddingBottom: "20px", paddingTop: "50px" }}
      >
        <Biography />
        <ProjectList />
        <Resume />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
