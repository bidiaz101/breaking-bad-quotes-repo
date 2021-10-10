import React,{useState} from "react"
import { Card, Spinner, Button, Alert } from "react-bootstrap"

function QuoteCard({quoteData, characterData, fave = false, handleDelete, id}) {
    const [addedFavorite, setAddedFavorite] = useState(false)

    const {quote, author, quote_id} = quoteData

    const character = characterData.find(character => {
        if((character.name === "Henry Schrader" && author === "Hank Schrader") || (character.name === "Gustavo Fring" && author === "Gus Fring")) {
            return character
        }
        return character.name === author
    })

    function handleFavorite(){
        fetch("http://localhost:3000/quotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                quote: quote,
                author: author,
                id: quote_id
            })
        })
        .then(setAddedFavorite(true))
    }

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
            <Button onClick={fave ? () => handleDelete(id) : handleFavorite}>{fave? "Remove from Favorites" : "Add to Favorites"}</Button>
            {addedFavorite ? (
                <Alert variant="success">
                    Added to <Alert.Link href="/favorites">Favorites</Alert.Link>!
                </Alert>
            ) : null }
        </Card>
    )
}

export default QuoteCard