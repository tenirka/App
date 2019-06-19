import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Table,
  Jumbotron,
  Container,
  Accordion
} from "react-bootstrap";
import img from "./images/cat w.jpg";
import img1 from "./images/cat.jpg";
import img2 from "./images/cat67.jpg";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />

          <Switch>
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add" component={Add} />
            <Route path="/" component={Recipes} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

class Recipes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card
          style={{
            width: "18rem",
            borderColor: "rgb(187, 237, 250)",
            borderRadius: "2%",
            backgroundColor: "aliceblue",
            margin: "20px"
          }}
        >
          <img src={img} alt="" />
          <Card.Body>
            <Card.Title>Recipe name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button
              variant="primary"
              style={{
                backgroundColor: "rgb(187, 237, 250)",
                borderRadius: "10%",
                color: "rgb(48, 167, 197)",
                borderColor: "rgb(187, 237, 250)"
              }}
            >
              Open
            </button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            borderColor: "rgb(187, 237, 250)",
            borderRadius: "2%",
            backgroundColor: "aliceblue",
            margin: "20px"
          }}
        >
          <img src={img1} alt="" />
          <Card.Body className="card">
            <Card.Title>Recipe name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button
              variant="primary"
              style={{
                backgroundColor: "rgb(187, 237, 250)",
                borderRadius: "10%",
                color: "rgb(48, 167, 197)",
                borderColor: "rgb(187, 237, 250)"
              }}
            >
              Open
            </button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}


class Profile extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
        <img className="avatar" src={img2} alt="sorry" />
        <Container style={{marginLeft:"5%"}}>
          <p >
            <h2>User name</h2>
            <h5>Email: adress@mail.ru</h5>
            <h5>City: City</h5>
            <h5>Age: Years</h5>
          </p>
        </Container>
        <Button className="edit" variant="outline-secondary" size="sm">
          Edit
        </Button>
        <h3 style={{marginLeft:"5%", marginTop:"3%"}}>My recipes:</h3>
        <Accordion className="accordion">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                First recipe
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Second recipe
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <h3 style={{marginLeft:"5%", marginTop:"3%"}}>My favourite:</h3>
        <Accordion className="accordion">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                First recipe
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Second recipe
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Jumbotron>
    );
  }
}

class Add extends React.Component {
  render() {
    return (
      <Table>
        <img src={"src/image/cat.jpg"} width="100" height="70" alt="sorry" />
        <thead>
          <tr>
            <th>#</th>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Potato</td>
            <td>1 kg</td>
          </tr>
          <tr>
            <td>2</td>
            <td>minced chicken</td>
            <td>1 kg</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link to="/">Recipes</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="User" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/sign-in">Log in</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/add">Add recipe</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Enter ingredients"
                className="mr-sm-2"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default App;
