import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './style/App.css';
import MovieCatalog from './components/movieCatalog';
import Users from './components/users'
import MoviePage from './components/moviePage';




class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path ="/">
            <MovieCatalog />
          </Route>
          <Route path= "/filme">
            <MoviePage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
