import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./header";
import Login from "./login";
import Profile from "./profile";
import Recipes from "./recipes";
import Add from "./add";
import food from "./images/food.jpg"
import { Footer } from "./footer";

const style = {
  backgroundImage: `url(${food})`
}

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
      <div style={style}>
         <Header />
         <div style={{ backgroundColor: "rgb(255, 234, 217)", display: "block", margin:" 0 10%" }}>
         <>
          <Switch>
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add" component={Add} />
            <Route path="/" component={Recipes} />
          </Switch>
        </>
      </div>
       <Footer/>
      </div>
     
      </BrowserRouter>
    );
  }
}

export default App;
