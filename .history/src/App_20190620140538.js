import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HeartCheckbox from "react-heart-checkbox";
import "bootstrap/dist/css/bootstrap.css";
import {
  Card,
  Navbar,
  Nav,
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
import head from "./images/head.jpg";

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

class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onClick = (evnet, props) => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { checked } = this.state;

    return (
      <div>
        <label expand="sm" style={{marginLeft:"180px"}}>
         <HeartCheckbox
        checked={checked}
        onClick={this.onClick}
      />
        </label>
        </div>
     
    );
  }
}


class Recipes extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: "rgb(223, 206, 180)" }}>
      <h1 style={{color:"black", fontWeight: "bold",
                fontFamily: "fantasy",
                fontSize: "40px", textAlign:"center",}}>Recipe catalog</h1>
      <button style={{float:"right", marginRight:"10%", marginTop:"0px"}}>
        <Link to="/add" style={{ fontWeight: "800", color:"rgb(12, 9, 3)",  fontStyle: "italic", fontSize: "20px"}}
                > Add recipe</Link>
                </button>
      <RecipesList/>
      <RecipesList/>
      </div>
    )
  }
}

class RecipesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card
          style={{
            width: "18.1rem",
            borderColor: "rgb(187, 237, 250)",
            borderRadius: "2%",
            backgroundColor: "aliceblue",
            margin: "20px"
          }}
        >
          <img
            style={{
              width: "18rem",
              height: "160px"
            }}
            src={img}
            alt=""
          />
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
                borderColor: "rgb(187, 237, 250)",
                width: "70px",
                marginLeft: "35%"
              }}
            >
              Open
            </button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18.1rem",
            borderColor: "rgb(187, 237, 250)",
            borderRadius: "2%",
            backgroundColor: "aliceblue",
            margin: "20px"
          }}
        >
          <img
            style={{
              width: "18rem",
              height: "160px"
            }}
            src={img1}
            alt=""
          />
          <Card.Body>
            <Card.Title>Recipe name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
            {/* <button
              variant="primary"
              style={{
                backgroundColor: "rgb(187, 237, 250)",
                borderRadius: "10%",
                color: "rgb(48, 167, 197)",
                borderColor: "rgb(187, 237, 250)",
                width: "70px",
                marginLeft: "35%"
              }}
            >
              Open
            </button> */}
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
      <Jumbotron fluid style={{ backgroundColor: "rgb(223, 206, 180)" }}>
        <img className="avatar" src={img2} alt="sorry" />
        <Container style={{ marginLeft: "6%" }}>
          <p>
            <h2>User name</h2>
            <h5>Email: adress@mail.ru</h5>
            <h5>City: City</h5>
            <h5>Age: Years</h5>
          </p>
        </Container>
        <Button className="edit" variant="outline-secondary" size="sm">
          Edit
        </Button>
        <h3 style={{ marginLeft: "5%", marginTop: "3%" }}>My recipes:</h3>
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
        <h3 style={{ marginLeft: "5%", marginTop: "3%" }}>My favourite:</h3>
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
      <>
        <div style={{ backgroundColor: "rgb(223, 206, 180)" }}>
          <FileInput />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredient</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr />
            </tbody>
          </Table>
        </div>
      </>
    );
  }
}

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const sectionStyle = {
  backgroundImage: `url(${head})`
};

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar style={sectionStyle} className="navbar">
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                color: "rgb(156, 253, 173)",
                fontWeight: "bold",
                fontFamily: "fantasy",
                marginLeft: "140px",
                fontStyle: "italic",
                fontSize: "40px"
              }}>
              RECIPES
            </Link>
          </Navbar.Brand>
            <Nav className="mr-auto" style={{marginLeft:"700px"}}>
              <button variant="link" style={{backgroundColor: "rgb(243, 223, 193)", margin:"25px", marginRight:"10px", border:"1px", borderRadius:"7%" }}>
               <Link to="/profile" style={{ fontWeight: "800", color:"rgb(12, 9, 3)",  fontStyle: "italic",
                fontSize: "20px"}}> Profile </Link>
            </button>

            <button variant="link" style={{backgroundColor: "rgb(243, 223, 193)", margin:"25px", marginLeft:"10px", border:"1px", borderRadius:"7%" }}>
              <Link to="/sign-in" style={{fontWeight: "800", color:"rgb(12, 9, 3)",  fontStyle: "italic",
                fontSize: "20px"}}>Sign in</Link>
            </button>
            </Nav>
            <Form inline >
              <FormControl
                type="text"
                placeholder="Enter ingredients"
                className="mr-sm-2"
              />
              <Button
                variant="outline-secondary"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "none"
                }}
              >
                Search
              </Button>
            </Form>
        
        </Navbar>
      </header>
    );
  }
}

export default App;