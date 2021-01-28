import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import FetchData from './components/FetchData';

import apiKey from './config';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <SearchForm />
        <Nav />

        <Switch>
          <Route  
            exact path="/"
            component={Home} 
          />

          <Route
            exact path="/search/" 
            render={() => <Redirect to="/" />}
          />
         
          <Route
            exact path="/search/:query" 
            render={() => <FetchData apiKey={apiKey} />}
          />

          <Route component={PageNotFound} />

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
