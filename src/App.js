import { Router, Route, Switch } from "react-router-dom";
import './App.css';
import Parent from './components/parent';
import Child from './components/child'
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          exact={true}
          component={Parent}
        />

        <Route
          path="/child"
          exact={true}
          component={Child}
        />

      </Switch>
    </Router>
  );
}

export default App;
