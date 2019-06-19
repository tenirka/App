import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
//import img from ".src/image/";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />

          <Switch>
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/favourite" component={Favourite} />
            <Route exact path="/add" component={Add} />
            <Route path="/" component={Recipes} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

class Recipes extends React.Component {
  render () {
  return (
   
      <Card style={{ width: "18rem" }}>
        <img src={'./images/cat2.jpg'} alt='sorry' />
        <Card.Body>
          <Card.Title>Recipe name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button variant="primary">Open</button>
        </Card.Body>
      </Card>
    
  )}

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
    )
  }
}


const Favourite = () => <div>bootstrap cards</div>;

function Profile(props)  {
    return (
  <Jumbotron fluid>
<img src={props.user.avatar} width='100' height='70' alt='sorry'/>
  <Container>
    <h2>User name</h2>
    <h5>Email: adress@mail.ru</h5>
    <h5>City: City</h5>
    <h5>Age: Years</h5>
  </Container>
</Jumbotron>
    );
  }

  const profile = {
    user: {
      avatar: 'src/image/cat4.jpg'
    }
  }

class Add extends React.Component {
  render() {
    return (
      
       
      <Table>
      <img src={'src/image/cat.jpg'} width='100' height='70' alt='sorry'/>
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
    )
  }
}

class Header extends React.Component {
  render(){
    return (
  <header>
  
  <Navbar bg="light" expand="lg">
  <Navbar.Brand ><Link to='/'>Recipes</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to='/profile'>Profile</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/favourite'>Favourite</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/sign-in'>Log in</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to='/add'>Add recipe</Link></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Enter ingredients" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

  </header>
)}};

export default App;
