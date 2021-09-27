import React, { useEffect, useState } from "react"
import CardContainer from "./CardContainer"
import QuoteCard from "./QuoteCard"

function Home({characterData}) {
    const [quoteData, setQuoteData] = useState([])

    useEffect(() => {
        fetch("https://breakingbadapi.com/api/quotes")
        .then(resp => resp.json())
        .then(data => setQuoteData(data))
    }, [])

    const quotesToDisplay = quoteData.map(quote => {
        if(quote.series === "Breaking Bad") {
            return <QuoteCard quoteData={quote} characterData={characterData} key={quote.quote_id} />
        } 
    })

    return (
        <div>
            <CardContainer>
              {quotesToDisplay}
            </CardContainer>
        </div>
    )
}

export default Home