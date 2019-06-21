import React from "react";
import HeartCheckbox from "react-heart-checkbox";
import  RecipesList from "recipe-list";
import Footer from "./footer";

import { Link } from "react-router-dom";

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
        <div>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
              textAlign: "center",
              marginTop: "20px"
            }}
          >
            Recipe catalog
          </h1>
        </div>
        <div style={{ marginRight: "10%" }}>
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

export default Recipes;