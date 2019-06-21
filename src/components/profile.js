import React from "react";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Accordion
} from "react-bootstrap";
import styled from "styled-components";
//import EditButton from 'react-edit-button';
import img2 from "../images/cat67.jpg";

class Profile extends React.Component {
  render() {
    return (
      <Styles>
        <Jumbotron fluid style={{ backgroundColor: "rgb(255, 234, 217)" }}>
          <div className="flex" >
            <div style={{ marginLeft: "100px" }}>
              <img className="avatar" src={img2} alt="sorry" />
            </div>
            <Container className="container" >
              <p>
                <h2>User name</h2>
                <h5>Email: adress@mail.ru</h5>
                <h5>City: City</h5>
                <h5>Age: Years</h5>
              </p>
              <Button className="edit" variant="outline-secondary" size="sm" style={{borderRadius:"1.25rem"}}>
                Edit
              </Button>
            </Container>
          </div>
          <div>
            <div>
              <h3>
                My recipes:
              </h3>
              <Accordion className="accordion">
                <Card>
                  <Card.Header className="cardHead">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <p className="p">First recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="cardBody">Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header className="cardHead">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <p className="p">Second recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="cardBody">Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
            <div>
              <h3>
                My favourite:
              </h3>
              <Accordion className="accordion">
                <Card>
                  <Card.Header className="cardHead">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <p className="p">First recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className="cardBody">Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header className="cardHead">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      <p className="p">Second recipe</p>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className="cardBody">Recipe</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </Jumbotron>
      </Styles>
    );
  }
}

const Styles = styled.div`
.flex {
  display: flex;
  flex-wrap: nowrap
};
.container {
  margin-top: 40px;
  margin-left: 50px;
  font-family: serif;
};
h3 {
  margin-left: 25%;
  margin-top: 3%;
  font-family: serif;
  font-weight:550;
};
.accordion {
  width: 800px;
  margin: 0 75px; 
  border-bottom: 1px solid black;
};
.cardHead {
  background-color: rgb(255, 234, 217);
  border: 1px solid black;
};
.cardBody {
  background-color: rgb(255, 234, 217);
  border: 1px solid black;
};
.p {
  font-family: serif;
  color:black;
  font-size:20px;
}


`

export default Profile;