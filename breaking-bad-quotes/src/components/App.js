import '../App.css';
import React from "react"
import { Route, Switch} from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Home from "./Home"
import Characters from "./Characters"
import Episodes from "./Episodes"
import Quotes from "./Quotes"
import Deaths from "./Deaths"
import Favorites from "./Favorites"

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/deaths">
            <Deaths />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
