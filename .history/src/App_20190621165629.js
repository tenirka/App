import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Login from "./components/login";
import Profile from "./components/profile";
import RecipeItems from "./components/recipes";
import Add from "./components/add";
// import food from "./images/food.jpg"
import { Footer } from "./components/footer";

// const style = {
//   backgroundImage: `url(${food})`
// }

class App extends PureComponent {
  render() {
    return (
      //<div style={style}>
      <BrowserRouter>
      
         <Header />
         <div style={{ backgroundColor: "rgb(255, 234, 217)", display: "block", margin:" 0 10%" }}>
         <>
          <Switch>
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add" component={Add} />
            <Route path="/" component={RecipeItems} />
          </Switch>
        </>
      </div>
       <Footer fixed="bottom"/>
      
     
      </BrowserRouter>
     // </div>
    );
  }
}

export default App;
