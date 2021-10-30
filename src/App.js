import Home from "./components/Home";
import Article from "./components/Article";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:id">
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
