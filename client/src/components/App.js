import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from './actions';

// Pages
import Signout from './auth/Signout';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Welcome from './pages/Welcome';
import ShowUser from './user/ShowUser';
import EditUser from './user/EditUser';
import Header from './utils/Header';
import Footer from './utils/Footer';
import NewFlight from './flights/NewFlight';
import ListFlights from './pages/ListFlights';

const App = (props) => {
  const user = useSelector((state) => state.auth.user);
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    if (authenticated) {
      props.fetchUser();
    }
  }, [authenticated, props.fetchUser, props]);

  return (
    <div>
      <BrowserRouter>
        <Header currentUser={user} />
        <Route exact path="/" component={Welcome} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        {authenticated ? (
          <div>
            <Route exact path="/user/:id" component={ShowUser} />
            <Route exact path="/user/edit/:id" component={EditUser} />
            <Route exact path="/flight/new" component={NewFlight} />
            <Route exact path="/list/flights" component={ListFlights} />
          </div>
        ) : (
          ''
        )}
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
