import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './pages/Login/SignIn/SignIn';
import SignUp from './pages/Login/SignUp/SignUp';
import Main from './pages/Main/Main';
import Lists from './pages/Main/Lists/Lists';
import Details from './pages/Main/Details/Details';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
<<<<<<< HEAD
          <Route exact path="/lists" component={Lists} />
          <Route
            exact
            path="/p/details/:sub_category_url/:id"
            component={Details}
          />
=======
          <Route exact path="/lists/:subCat" component={Lists} />
          <Route exact path="/details" component={Details} />
>>>>>>> origin/feature/mainNavRouting
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default Routes;
