import React, { useState } from "react"
import CardContainer from "./CardContainer"

function Quotes({characterData, quoteData}) {
    const [ selectedAuthor, setAuthor ] = useState("All")
    console.log(quoteData)

    const authorOptions = quoteData.filter(quoteObj => quoteObj.series === "Breaking Bad").map(quoteObj => <option value={quoteObj.author} key={quoteObj.quote_id}>{quoteObj.author}</option>)

    return (
        <div>
            <h2>All Quotes</h2>
            <form>
                <label>Filter by Author:</label>
                <br />
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option value="All">All</option>
                    {authorOptions}
                </select>
            </form>
            <CardContainer characterData={characterData} quoteData={quoteData} selectedAuthor={selectedAuthor} />
        </div>
    )
}

export default Quotes