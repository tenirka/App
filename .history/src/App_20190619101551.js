import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
        <Card.Img variant="top" src="cat2.jpg/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button variant="primary">Go somewhere</button>
        </Card.Body>
      </Card>
    
  )}

}
 
// function Login(props) {
//   return (
  
//   )
// }

const Login = () => <div>bootstrap sign-in</div>;

const Profile = () => <div>bootstrap profile</div>;

const Favourite = () => <div>bootstrap cards</div>;

class Header extends React.Component {
  render(){
    return (
  <header>
  
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Recipes</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="User" id="basic-nav-dropdown">
        <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#Favourite">Favourite</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Enter ingredients</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

  </header>
)}};

export default App;
