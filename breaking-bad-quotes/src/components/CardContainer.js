import React from "react"
import QuoteCard from "./QuoteCard"
import {Container, Row} from "react-bootstrap"

function CardContainer({quoteData, characterData, selectedAuthor}) {
    const quotesToDisplay = quoteData.filter(quote => {
        if(selectedAuthor === "All") {
            return true
        } else if (quote.author === selectedAuthor) {
            return quote
        }
    }).map(quote => {
        if(quote.series === "Breaking Bad") {
            return <QuoteCard 
                quoteData={quote} 
                characterData={characterData} 
                key={quote.quote_id}
            />
        } 
    })

    return (
        <Container fluid>
            <Row className="justify-content-md-center" style={{padding: "20px"}}>
                {quotesToDisplay}
            </Row>
        </Container>
    )
}

export default CardContainer