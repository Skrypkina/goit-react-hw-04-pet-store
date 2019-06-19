import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Homepage from '../pages/Home';
// import AboutPage from '../pages/About';
// import PetsPage from '../pages/PetsPage';
import Nav from './Nav';
// import SinglePet from '../pages/SinglePet';

const AsyncHomepage = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "home-page" */),
);

const AsyncPetsPage = lazy(() =>
  import('../pages/PetsPage' /* webpackChunkName: "pets-page" */),
);

const AsyncSinglePet = lazy(() =>
  import('../pages/SinglePet' /* webpackChunkName:"singlepet-page" */),
);

const AsyncAbout = lazy(() =>
  import('../pages/About' /* webpackChunkName: "about-page" */),
);

const App = () => (
  <div>
    <Nav />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/" exact component={AsyncHomepage} />
        <Route path="/about" component={AsyncAbout} />
        <Route path="/pets/:id" component={AsyncSinglePet} />
        <Route path="/pets" component={AsyncPetsPage} />
        <Route component={AsyncHomepage} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
