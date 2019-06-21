import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import img from "../images/cat w.jpg";
import img4 from "../images/kebab.jpeg";
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  render() {
    return (
      function ResipesList(Recipe) =>
    const List = Recipes.map((Recipe) => (
    <li key={Recipe.id}></li>
    )
  )},
  <Styles>
        <div className="card-wrapper">
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
            <Link to="/recipe-id">
              <img
                style={{
                  width: "15rem",
                  height: "160px"
                }}
                src={img}
                alt=""
              />
            </Link>

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
                  textAlign: "center"
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
                width: "15rem",
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
        </div>
        </Styles>
    );
  }
}

const Recipes = [Recipe];

// function ResipesList(Recipe) {
//   const List = Recipes.map((Recipe) => 
//   (
//   <li key={Recipe.id}></li>
//   )
// )}


const Styles = styled.div`
  width: 90%;

  .card-wrapper {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    position: relative;
    flex-shrink: 5;
  };


`;



export default Recipe;
