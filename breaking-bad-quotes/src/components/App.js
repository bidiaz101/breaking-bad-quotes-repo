import '../App.css';
import React, { useEffect, useState } from "react"
import { Route, Switch, Link } from "react-router-dom"
import Header from "./Header"
import Navbar from "./Navbar"
import Home from "./Home"
import Characters from "./Characters"
import Episodes from "./Episodes"
import Quotes from "./Quotes"
import Deaths from "./Deaths"
import Favorites from "./Favorites"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [characterData, setCharacterData] = useState([])
  const [quoteData, setQuoteData] = useState([])

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters")
    .then(resp => resp.json())
    .then(data => setCharacterData(data))
    
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
            <Episodes characterData={characterData} />
          </Route>
          <Route path="/quotes">
            <Quotes characterData={characterData} quoteData={quoteData} />
          </Route>
          <Route path="/deaths">
            <Deaths characterData={characterData} />
          </Route>
          <Route path="/favorites">
            <Favorites characterData={characterData} />
          </Route>
          <Route exact path="/">
            <Home characterData={characterData} quoteData={quoteData} />
          </Route>
          <Route>
            <h1>404 page not found</h1>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
