import React from "react";
import HeartCheckbox from "react-heart-checkbox";
import  RecipesList from "./recipe-list";
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
        <div style={{ backgroundColor: "rgb(255, 234, 217)", display: "block" }}>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
              textAlign: "center",
              margin:"20px"
            }}
          >
            Recipe catalog
          </h1>
        </div>
       
        <RecipesList /> <RecipesList /> <RecipesList /> <RecipesList />
      </div>
    );
  }
}

export default Recipes;