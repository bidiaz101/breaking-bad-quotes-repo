import React from "react"
import QuoteCard from "./QuoteCard"
import {Container, Row} from "react-bootstrap"

function CardContainer({quoteData, characterData}) {
    const quotesToDisplay = quoteData.map(quote => {
        if(quote.series === "Breaking Bad") {
            return <QuoteCard quoteData={quote} characterData={characterData} key={quote.quote_id} />
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