import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Teams from './views/Teams/Teams';
import Team from './components/TeamList/Team';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/teams" component={Teams} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
