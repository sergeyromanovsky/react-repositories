import React from 'react';
import Home from './Home';

import { Route, Switch } from 'react-router-dom';

function App() {
  const a = 2;
  return (
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  );
}

export default App;
