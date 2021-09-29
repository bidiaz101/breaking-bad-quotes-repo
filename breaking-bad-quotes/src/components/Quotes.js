import React, { useState } from "react"
import CardContainer from "./CardContainer"

function Quotes({characterData, quoteData}) {
    const [ selectedAuthor, setAuthor ] = useState("All") 

    const authorArr = ["All", "Walter White", "Jesse Pinkman", "Skyler White", "Saul Goodman", "Hank Schrader", "Mike Ehrmantraut", "Gus Fring", "Hector Salamanca"]

    const authorOptions = authorArr.map(author => {
        return <option value={author}key={author}>{author}</option>
    })

    return (
        <div>
            <h2>All Quotes</h2>
            <form>
                <label>Filter by Author:</label>
                <br />
                <select onChange={(e) => setAuthor(e.target.value)}>
                    {authorOptions}
                </select>
            </form>
            <CardContainer characterData={characterData} quoteData={quoteData} selectedAuthor={selectedAuthor} />
        </div>
    )
}

export default Quotes