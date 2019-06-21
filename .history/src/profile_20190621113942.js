import React from "react";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Accordion
} from "react-bootstrap";
//import EditButton from 'react-edit-button';
import img2 from "./images/cat67.jpg";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{ backgroundColor: "rgb(255, 234, 217)" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap"
            }}
          >
            <div style={{ marginLeft: "100px" }}>
              <img className="avatar" src={img2} alt="sorry" />
            </div>
            <Container
              style={{
                marginTop: "40px",
                marginLeft: "50px",
                fontFamily: "serif"
              }}
            >
            <Edit/>
            </Container>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap"
            }}
          >
            <div>
              <h3
                style={{
                  marginLeft: "40%",
                  marginTop: "3%",
                  fontFamily: "serif",
                  fontWeight:"550"
                }}
              >
                My recipes:
              </h3>
              <Accordion
                className="accordion"
                style={{ width: "800px", margin: " 0 75px", borderBottom:"1px solid black" }}
              >
                <Card>
                  <Card.Header
                    style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <p style={{ fontFamily: "serif", color:"black", fontSize:"20px" }}>First recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}>Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header
                    style={{ backgroundColor: "rgb(255, 234, 217)",  border:"1px solid black" }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <p style={{ fontFamily: "serif", color:"black",  fontSize:"20px" }}>Second recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}>Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div>
              <h3
                style={{
                  marginLeft: "35%",
                  marginTop: "3%",
                  fontFamily: "serif",
                  fontWeight:"550"
                }}
              >
                My favourite:
              </h3>
              <Accordion
                className="accordion"
                style={{ width: "800px", margin: " 0 10px",  borderBottom:"1px solid black"  }}
              >
                <Card>
                  <Card.Header
                    style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <p style={{ fontFamily: "serif", color:"black",  fontSize:"20px" }}>First recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}>Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header
                    style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}
                  >
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <p style={{ fontFamily: "serif", color:"black",  fontSize:"20px" }}>Second recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body style={{ backgroundColor: "rgb(255, 234, 217)", border:"1px solid black" }}>Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
import React, { Component } from 'react'
import EditButton from 'react-edit-button'

class Edit extends Component {
  state = {
    text: <p>
    <h2>User name</h2>
    <h5>Email: adress@mail.ru</h5>
    <h5>City: City</h5>
    <h5>Age: Years</h5>
  </p>
  }
  onAccept = (text) => {
    this.setState({ text })
  }
  render () {
    return (
      <EditButton onAccept={handleOnAccept}>
        <span>{ this.state.text }</span>
      </EditButton>
    )
  }
}
export default Profile;