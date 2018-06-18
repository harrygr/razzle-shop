import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Shop from './Shop';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shop" component={Shop} />
    </Switch>
  </div>
);

export default App;
