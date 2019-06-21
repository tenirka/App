import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "header";
import Footer from "footer";
import Login from "login";
import Profile from "profile";
import Login from "login";
import Recipes from "recipes";

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
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
