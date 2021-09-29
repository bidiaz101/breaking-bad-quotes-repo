import React from "react"
import { Card, Spinner } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function QuoteCard({quoteData, characterData}) {
    const {quote, author} = quoteData

    const character = characterData.find(character => {
        if((character.name === "Henry Schrader" && author === "Hank Schrader") || (character.name === "Gustavo Fring" && author === "Gus Fring")) {
            return character
        }
        return character.name === author
    })

    return (
        <Card style={{ width: '18rem', padding: "10px" }}>
            {character ? (
                <Card.Img variant="top" src={character.img} />
                ) : (
                <Spinner animation="border" role="status"></Spinner>
            )}
            <Card.Body>
                <Card.Title>"{quote}"</Card.Title>
                <Card.Text>- {author}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default QuoteCard