import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss'

import Details from "./Details";
import Home from "./Home";

export default function App() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/">Full Stack Test</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
        <main className='container p-4'>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/details/:id" exact>
              <Details />
            </Route>
          </Switch>
        </main>
        
      </Router>
    </div>
  );
}
