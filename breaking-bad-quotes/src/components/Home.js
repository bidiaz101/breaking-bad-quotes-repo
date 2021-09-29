import React from "react"
import { Carousel, Card } from "react-bootstrap"

function Home({characterData, quoteData}) {
    console.log(quoteData)

    const carouselItems = quoteData.map(quote => {
        const characterObj = characterData.find(character => {
            if((character.name === "Henry Schrader" && quote.author === "Hank Schrader") || (character.name === "Gustavo Fring" && quote.author === "Gus Fring")) {
                return character
            }
            return character.name === quote.author
        })

        if(quote.series === "Breaking Bad") {
            return (
                <Carousel.Item interval={3000} key={quote.quote_id}>
                    <img
                    className="d-block w-100"
                    src={characterObj.img}
                    alt={quote.author}
                    style={{padding: "10px"}}
                    />
                    <Carousel.Caption>
                    <h3>"{quote.quote}"</h3>
                    <p>-{quote.author}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )
        } 
    })

    return (
        <Carousel>
            {carouselItems}
        </Carousel>
    )
}

export default Home