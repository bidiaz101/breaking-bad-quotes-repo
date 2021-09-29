import React from "react"
import CardContainer from "./CardContainer"

function Quotes({characterData, quoteData}) {
    return (
        <div>
            <h2>All Quotes</h2>
            <CardContainer characterData={characterData} quoteData={quoteData} />
        </div>
    )
}

export default Quotes