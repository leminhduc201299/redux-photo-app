import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import NotFound from './components/NotFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>} >
        <Router>
          
          {/* TODO: Remove after testing */}
          <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to Add new photo page</Link></li>
            <li><Link to="/photos/123">Go to Edit photo page</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />

            <Route path="/photos">
              <Photo />
            </Route>
            <Route path="/">
              <NotFound />
          </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
