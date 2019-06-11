import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/Home';
import AboutPage from '../pages/About';
import PetsPage from '../pages/PetsPage';
import Nav from './Nav';
import SinglePet from '../pages/SinglePet';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:id" component={SinglePet} />
      <Route path="/pets" component={PetsPage} />
      <Route component={Homepage} />
    </Switch>
  </div>
);

export default App;
