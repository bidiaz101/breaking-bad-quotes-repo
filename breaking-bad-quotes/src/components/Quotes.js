import React from "react"
import CardContainer from "./CardContainer"

function Quotes({characterData, quoteData}) {
    return (
        <div>
            <h1>All Quotes</h1>
            <CardContainer characterData={characterData} quoteData={quoteData} />
        </div>
    )
}

export default Quotes