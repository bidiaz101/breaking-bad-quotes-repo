import React from "react"
import { Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function QuoteCard({quoteData, characterData}) {
    const {quote, author} = quoteData

    const character = characterData.find(character => {
        if(character.name === "Henry Schrader" && author === "Hank Schrader") {
            return character
        }else if(character.name === "Gustavo Fring" && author === "Gus Fring") {
            return character
        }
        return character.name === author
    })

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={character.img} />
            <Card.Body>
                <Card.Title>"{quote}"</Card.Title>
                <Card.Text>- {author}</Card.Text>
            </Card.Body>
        </Card>
    )
}

//"https://tse1.explicit.bing.net/th?id=OIP.w8iviKQzyNcBB0sjhAfVFAHaFy&pid=Api" surpised pika

export default QuoteCard