import React from "react";
import HeartCheckbox from "react-heart-checkbox";
import  RecipesList from "./recipe-list";

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
      <div style={{ margin:"20px" }}>
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "fantasy",
              fontSize: "40px",
              textAlign: "center",
              
            }}
          >
            Recipe catalog
          </h1>
        <RecipesList /> <RecipesList /> <RecipesList /> <RecipesList />
      </div>
    );
  }
}

export default Recipes;