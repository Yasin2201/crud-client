import Home from "./components/Home";
import Article from "./components/Article";
import NewArticle from "./components/NewArticle";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/article/:id">
          <Article />
        </Route>

        <Route exact path="/new">
          <NewArticle />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
