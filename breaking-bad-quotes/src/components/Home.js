import React from "react"
import CardContainer from "./CardContainer"

function Home({characterData, quoteData}) {
    return (
        <div>
            <CardContainer characterData={characterData} quoteData={quoteData} />
        </div>
    )
}

export default Home