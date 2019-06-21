import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

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
          <Nav className="mr-auto" style={{ marginLeft: "900px" }}>
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
                marginLeft: "10px",
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
          </Nav>
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
                borderRadius: "1.25rem"
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
export default header