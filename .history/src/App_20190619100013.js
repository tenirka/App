import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
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

class Recipes extends React.Component {
  render () {
  return (
   
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    
  )}

}
 
// function Login(props) {
//   return (
  
//   )
// }

const Login = () => <div>bootstrap sign-in</div>;

const Profile = () => <div>bootstrap profile</div>;

const Favourite = () => <div>bootstrap cards</div>;

const Header = () => (
  <header>
    <nav>bootstrap cards (header)</nav>
  </header>
);

export default App;
