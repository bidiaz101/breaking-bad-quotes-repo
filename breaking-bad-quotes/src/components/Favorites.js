import React, { useEffect, useState } from "react"
import QuoteCard from "./QuoteCard"
import { Container, Row } from "react-bootstrap"

function Favorites({ characterData }) {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/quotes`)
        .then(resp => resp.json())
        .then(data => setFavorites(data))
    }, [])

    function handleDelete(id) {
        fetch(`${process.env.REACT_APP_API_URL}/quotes/${id}`, {
            method: "DELETE"
        })
        .then(setFavorites(favorites.filter(favorite => favorite.id !== id)))
    }

    const faveQuotes = favorites.map(faveQuote => {
        return <QuoteCard quoteData={faveQuote} characterData={characterData} fave={true} handleDelete={handleDelete} id={faveQuote.id} key={faveQuote.id} />
    })

    return (
        <Container fluid>
            <Row className="justify-content-md-center" style={{padding: "20px"}}>
                <h2>Favorites</h2>
                <p>Go <a href="/quotes">here</a> to add quotes.</p>
                {faveQuotes}
            </Row>
        </Container>
    )
}

export default Favorites