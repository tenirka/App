import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import head from "./images/head.jpg";
import { Link } from "react-router-dom";


const sectionStyle = {
  backgroundImage: `url(${head})`
};

class Header extends React.Component {
  render() {
    return (
      <div>
        <header>
        <Navbar style={sectionStyle} className="navbar">
          <div style={{marginLeft:"5%"}}>
            <Form inline>
            <FormControl
              type="text"
              placeholder="Enter ingredients"
              style={{ borderRadius: "1.25rem" }}
            />
            <Button
              variant="outline-secondary"
              style={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "none",
                borderRadius: "1.25rem", 
                float:"right"
              }}
            >
              Search
            </Button>
          </Form>
          </div>
          
        </Navbar>
      </header>
      <Navbar style={{ backgroundColor: "rgb(236, 188, 126)", height:"50px" }}>
  <Navbar.Brand><Link
              to="/"
              style={{
                color: "rgb(44, 35, 23)",
                fontWeight: "bold",
                fontFamily: "fantasy",
                marginLeft: "140px",
                fontStyle: "italic",
                fontSize: "30px"
              }}
            >
              RECIPES
            </Link></Navbar.Brand>
  
  <Navbar.Collapse className="justify-content-end">
    <Nav>
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
                  fontWeight: "bold",
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
                border: "1px solid #cccccc",
                borderRadius: "1.25rem"
              }}
            >
              <Link
                to="/sign-in"
                style={{
                  fontWeight: "bold",
                  color: "rgb(12, 9, 3)",
                  fontStyle: "italic",
                  fontSize: "20px"
                }}
              >
                Sign in
              </Link>
            </button>
            <div >
          <button
            style={{
              borderRadius: "1.25rem",
              border: "1px solid #cccccc",
              backgroundColor: "rgb(238, 89, 89)", marginTop:"25px"
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
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
      </div>
      
    );
  }
}
export default Header;