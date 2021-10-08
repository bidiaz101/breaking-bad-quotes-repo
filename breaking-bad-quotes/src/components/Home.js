import React from "react"
import { Carousel } from "react-bootstrap"

function Home({characterData, quoteData}) {
    const carouselItems = quoteData.map(quote => {
        const characterObj = characterData.find(character => {
            if((character.name === "Henry Schrader" && quote.author === "Hank Schrader") || (character.name === "Gustavo Fring" && quote.author === "Gus Fring")) {
                return character
            }
            return character.name === quote.author
        })
        
        if(quote.series === "Breaking Bad" && characterObj) {
            return (
                <Carousel.Item interval={2000} key={quote.quote_id}>
                    <img
                        className="d-block w-100"
                        src={characterObj.img}
                        alt={quote.author}
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
        <Carousel id="home-carousel">
            {carouselItems}
        </Carousel>
    )
}

export default Home