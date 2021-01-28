// Import Reacter router stuff
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// Import child components
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PageNotFound from "./components/PageNotFound";
import Home from "./components/Home";
import FetchData from "./components/FetchData";
// Import the api key from config file
import apiKey from "./config";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />

        <Switch>
          {/* Home route */}
          <Route exact path="/" component={Home} />
          {/* If path was manually typed without search term, redirects to home */}
          <Route exact path="/search/" render={() => <Redirect to="/" />} />
          {/* Dynamic route proving the query param to FetchData */}
          <Route
            exact
            path="/search/:query"
            render={() => <FetchData apiKey={apiKey} />}
          />
          {/* Error route for page not found */}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
