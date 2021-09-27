import React from "react"
import { Card } from "react-bootstrap"

function QuoteCard({quoteData, characterData}) {
    const {quote, author} = quoteData

    const character = characterData.find(character => {
        return character.name === author
    })

    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{width: "100%"}} src={character? character.img : "https://tse1.explicit.bing.net/th?id=OIP.w8iviKQzyNcBB0sjhAfVFAHaFy&pid=Api"} />
        <Card.Body>
            <Card.Title>{quote}</Card.Title>
            <Card.Text>{author}</Card.Text>
        </Card.Body>
    </Card>
  )
}

//"https://tse1.explicit.bing.net/th?id=OIP.w8iviKQzyNcBB0sjhAfVFAHaFy&pid=Api" surpised pika
// src={character? character.img : "https://tse1.explicit.bing.net/th?id=OIP.w8iviKQzyNcBB0sjhAfVFAHaFy&pid=Api"}

export default QuoteCard