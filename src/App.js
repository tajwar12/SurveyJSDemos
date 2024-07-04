import React, { useState } from "react";
import "survey-core/defaultV2.css";
import Form1 from "./ui/componenets/Form1/Form1";
import Contact from "./ui/componenets/ContactForm/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Panel from "./ui/componenets/Panel/Panel";
import DynamicPanel from "./ui/componenets/DynamicPanel/DynamicPanel";

function App() {
  const [activeComponent, setActiveComponent] = useState("Form1");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Form1":
        return <Form1 />;
      case "Contact":
        return <Contact />;
      case "Panel":
        return <Panel />;
      case "DynamicPanel":
        return <DynamicPanel />;
      case "Logo":
        return <img src="images.png" alt="Logo" />;
      default:
        return <Form1 />;
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand onClick={() => setActiveComponent("Logo")}>
            <img
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            SurveyJS Examples
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setActiveComponent("Form1")}>
                Patient Registration Form
              </Nav.Link>
              <Nav.Link onClick={() => setActiveComponent("Contact")}>
                Contact Form
              </Nav.Link>
              <Nav.Link onClick={() => setActiveComponent("Panel")}>
                Panel
              </Nav.Link>
              <Nav.Link onClick={() => setActiveComponent("DynamicPanel")}>
                Dynamic Panel
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {renderComponent()}
    </div>
  );
}

export default App;
