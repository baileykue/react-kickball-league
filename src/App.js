import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Team from './views/Teams/Team';
import Players from './views/Players/Players';
import Player from './views/Players/Player';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/teams" component={Teams} />
          <Route path="/players/:id" component={Player} />
          <Route path="/players" component={Players} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
