import React from "react";
import { Card } from "react-bootstrap";
import img from "./images/cat w.jpg";
import img1 from "./images/cat.jpg";
import shava from "./images/shava.jpg";
import img4 from "./images/kebab.jpeg";

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
              marginLeft: "180px",
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

export default RecipesList;