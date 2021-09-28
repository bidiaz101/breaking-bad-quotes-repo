import '../App.css';
import React, {useEffect, useState} from "react"
import { Route, Switch, Link} from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Home from "./Home"
import Characters from "./Characters"
import Episodes from "./Episodes"
import Quotes from "./Quotes"
import Deaths from "./Deaths"
import Favorites from "./Favorites"

function App() {
  const [characterData, setCharacterData] = useState([])

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
    .then(resp => resp.json())
    .then(data => setCharacterData(data))
  }, [])

  const [quoteData, setQuoteData] = useState([])

  useEffect(() => {
      fetch("https://breakingbadapi.com/api/quotes")
      .then(resp => resp.json())
      .then(data => setQuoteData(data))
  }, [])

  return (
    <div className="App">
      <Link to="/">
        <Header />
      </Link>
      <Navbar />
        <Switch>
          <Route path="/characters">
            <Characters characterData={characterData} quoteData={quoteData} />
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
            <Home characterData={characterData} quoteData={quoteData} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
