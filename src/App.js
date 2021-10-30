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
        <Route path="/">
          <Home />
        </Route>

        <Route path="/:id">
          <Article />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
