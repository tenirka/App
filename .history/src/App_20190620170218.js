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
// import {
//   FacebookShareButton,
//   LinkedinShareButton,
//   TwitterShareButton,
//   TelegramShareButton,
//   WhatsappShareButton,
//   PinterestShareButton,
//   VKShareButton,
//   OKShareButton,
//   FacebookShareCount,
//   VKShareCount,
//   OKShareCount,
//   TumblrShareCount,
//   FacebookIcon,
//   TwitterIcon,
//   TelegramIcon,
//   WhatsappIcon,
//   LinkedinIcon,
//   PinterestIcon,
//   VKIcon,
//   OKIcon
// } from 'react-share';
import img from "./images/cat w.jpg";
import img1 from "./images/cat.jpg";
import img2 from "./images/cat67.jpg";
import head from "./images/head.jpg";
import shava from "./images/shava.jpg";
import img4 from "./images/kebab.jpeg";
import cook from "./images/cook.jpg";

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
        <label expand="sm" style={{ marginLeft: "180px" }}>
          <HeartCheckbox checked={checked} onClick={this.onClick} />
        </label>
      </div>
    );
  }
}

class Recipes extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(255, 234, 217)", display: "block" }}>
        <div style={{ marginTop: "20px" }}>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
              textAlign: "center"
            }}
          >
            Recipe catalog
          </h1>
        </div>
        <div className="sorting" style={{ marginRight: "10%" }}>
          <button
            style={{
              float: "right",
              marginTop: "-45px",
              borderRadius: "1.25rem",
              border: "1px solid #cccccc",
              backgroundColor: "rgb(238, 89, 89)"
            }}
          >
            <Link
              to="/add"
              style={{
                fontWeight: "800",
                color: "white",
                fontStyle: "italic",
                fontSize: "19px",
                padding: "3px"
              }}
            >
              Add recipe
            </Link>
          </button>
        </div>
        <RecipesList /> <RecipesList /> <RecipesList /> <RecipesList />
        <Footer />
      </div>
    );
  }
}

class RecipesList extends React.Component {
  render() {
    return (
      <div style={{ width: "90%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            position: "relative"
          }}
        >
          <Card
            style={{
              width: "18.1rem",
              borderColor: "none",
              borderRadius: "0.25rem;",
              backgroundColor: "aliceblue",
              margin: "20px",
              boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.15)"
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
              borderColor: "none",
              borderRadius: "20.25rem;",
              backgroundColor: "aliceblue",
              boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.15)",
              margin: "20px"
            }}
          >
            <img
              style={{
                width: "18rem",
                height: "160px"
              }}
              src={img4}
              alt=""
            />
            <Card.Body>
              <Card.Title>Recipe name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
              borderColor: "none",
              borderRadius: "0.25rem;",
              backgroundColor: "aliceblue",
              margin: "20px",
              boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.15)"
            }}
          >
            <img
              style={{
                width: "18rem",
                height: "160px"
              }}
              src={shava}
              alt=""
            />
            <Card.Body>
              <Card.Title>Recipe name</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
              borderColor: "none",
              borderRadius: "0.25rem;",
              backgroundColor: "aliceblue",
              margin: "20px",
              boxShadow: "0 0.25rem 0.5rem rgba(0,0,0,0.15)"
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
        </div>
      </div>
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
      <div>
 <Jumbotron fluid style={{ backgroundColor: "rgb(223, 206, 180)" }} >
        <div style={{
              display: "flex",
              flexWrap: "nowrap",
            }}>
            <div style={{marginLeft:"100px"}}>
              <img className="avatar" src={img2} alt="sorry" />
            </div>
        <Container style={{marginTop:"70px", marginLeft:"50px", fontFamily: "serif"}}>
          <p>
            <h2>User name</h2>
            <h5>Email: adress@mail.ru</h5>
            <h5>City: City</h5>
            <h5>Age: Years</h5>
          </p>
          <Button className="edit" variant="outline-secondary" size="sm">
          Edit
        </Button>
        </Container>
        </div>
        <div  style={{
              display: "flex",
              flexWrap: "nowrap",
              //justifyContent:"space-around"
            }}>
          <div>
            <h3 style={{ marginLeft: "5%", marginTop: "3%", fontFamily: "serif" }}>My recipes:</h3>
        <Accordion className="accordion" style={{width:"600px", margin:"50px"}}>
          <Card >
            <Card.Header style={{backgroundColor:"rgb(255, 234, 217)"}}>
              <Accordion.Toggle as={Button} variant="link" eventKey="0" >
               <p style={{fontFamily: "serif"}} >First recipe</p> 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{backgroundColor:"rgb(255, 234, 217)"}}>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
               <p style={{fontFamily: "serif"}}>Second recipe</p> 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
          </div>
          <div>
            <h3 style={{ marginLeft: "5%", marginTop: "3%", fontFamily: "serif" }}>My favourite:</h3>
        <Accordion className="accordion" style={{width:"600px", margin:"50px"}}>
          <Card >
            <Card.Header style={{backgroundColor:"rgb(255, 234, 217)" }}>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
               <p style={{fontFamily: "serif", }}>First recipe</p> 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header style={{backgroundColor:"rgb(255, 234, 217)"}}>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
               <p style={{fontFamily: "serif"}}>Second recipe</p> 
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Recipe</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
          </div>
        </div>
        
        
         
      </Jumbotron>
      <Footer/>
      </div>
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
              }}
            >
              RECIPES
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto" style={{ marginLeft: "700px" }}>
            <button
              variant="link"
              style={{
                backgroundColor: "rgb(243, 223, 193)",
                margin: "25px",
                marginRight: "10px",
                border: "1px solid #cccccc",
                borderRadius: "1.25rem"
              }}
            >
              <Link
                to="/profile"
                style={{
                  fontWeight: "800",
                  color: "rgb(12, 9, 3)",
                  fontStyle: "italic",
                  fontSize: "20px"
                }}
              >
                Profile
              </Link>
            </button>

            <button
              variant="link"
              style={{
                backgroundColor: "rgb(243, 223, 193)",
                margin: "25px",
                marginLeft: "10px",
                border: "1px solid #cccccc",
                borderRadius: "1.25rem"
              }}
            >
              <Link
                to="/sign-in"
                style={{
                  fontWeight: "800",
                  color: "rgb(12, 9, 3)",
                  fontStyle: "italic",
                  fontSize: "20px"
                }}
              >
                Sign in
              </Link>
            </button>
          </Nav>
          <Form inline>
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
class Footer extends React.Component {
  render() {
    return (
      <Navbar
        expand="lg"
        sticky="bottom"
        style={{
          background: "#242424",
          paddingTop: "1.875rem",
          borderBottom: "1px solid #242424",
          position: "relative",
          height: "180px",
          justifyContent: "space-between"
        }}
      >
        <Container style={{ margin: "5px", width: "25%" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
            }}
          >
            <div style={{ margin: "20px" }}>
              <img
                src={cook}
                alt=""
                style={{ width: "90px", height: "90px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ margin: "5px" }}>
              <p style={{ color: "rgb(129, 131, 126)", fontFamily: "serif" }}>
                Here you will find many new culinary ideas, become the author
                ofyour own Culinary Book, meet like-minded friends and you can
                chat about everything in the world!
              </p>
            </div>
           
          </div>
        </Container>
        <div style={{ margin: "5px", width:"400px", marginTop:"100px"}}>
              <p
                style={{
                  color: "rgb(129, 131, 126)",
                  fontFamily: "serif",
                  fontSize: "10px"
                }}
              >
                © 2019 ООО «Home-cooking.ru» — delicious recipes. All rights
                reserved
              </p>
            </div>
      </Navbar>
    );
  }
}

export default App;
