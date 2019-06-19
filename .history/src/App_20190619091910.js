import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Card } from "react-bootstrap";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <>
          <Header />

          <Switch>
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/favourite" component={Favourite} />
            <Route path="/" component={Recipes} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

function Recipes(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Img variant="top" src="https://placekitten.com/g/64/64" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const 

const Login = () => <div>bootstrap sign-in</div>;

const Profile = () => <div>bootstrap profile</div>;

const Favourite = () => <div>bootstrap cards</div>;

const Header = () => (
  <header>
    <nav>bootstrap cards (header)</nav>
  </header>
);

export default App;
