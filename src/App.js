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
            <Route exact path="/recipes" component={Recipes} />
            <Route exact path="/sign-in" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/favourite" component={Favourite} />
            <Route path="/" component={() => <div>root</div>} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

const Recipes = () => <div>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="cat2.jpg/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
</div>;

const Login = () => <div>bootstrap sign-in</div>;

const Profile = () => <div>bootstrap profile</div>;

const Favourite = () => <div>bootstrap cards</div>;

const Header = () => (
  <header>
    <nav>bootstrap cards (header)</nav>
  </header>
);

export default App;
