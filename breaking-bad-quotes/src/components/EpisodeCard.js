import React from "react"
import { Card, Carousel, Spinner } from "react-bootstrap"

function EpisodeCard({chosenEpisode, characterData}) {
    const {air_date, characters, episode, season, title} = chosenEpisode

    const featCharacters = characters.map(featCharacter => {
        if(featCharacter === "a fly") {
            return { 
                img: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F760110445%2F0x0.jpg%3Ffit%3Dscale0",
                name: "Fly",
                char_id: 3
            }
        }
        return characterData.find(character => {
            if((featCharacter === "Hank Schrader" && character.name === "Henry Schrader") || (featCharacter === "Krazy-8" && character.name === "Domingo Molina") || (featCharacter === "Ted Beneke" && character.name === "Theodore Beneke") || (featCharacter === "Badger" && character.name === "Brandon Mayhew") || (featCharacter === "Ken Wins" && character.name === "Ken") || ((featCharacter === "Elliott Schwarts" || featCharacter === "Eliott Schwartz") && character.name === "Elliot Schwartz") || (featCharacter === "Gretchen Swartz" && character.name === "Gretchen Schwartz") || (featCharacter === "Combo" && character.name === "Christian Ortgea") || (featCharacter === "The cousins" && character.name === "Marco & Leonel Salamanca")){ 
                return character
            } else if (character.name === featCharacter) {
                return character
            }
        })
    })

    const carouselItems = featCharacters.filter(character => character ? character : null).map(character => {
        return (
            <Carousel.Item key={character.char_id}>
                <img
                className="d-block w-100"
                src={character.img}
                alt={character.name}
                />
                <Carousel.Caption>
                <p>{character.name}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>Season {season}, Episode {episode} </Card.Subtitle>
                <hr />
                <Card.Text>Characters Featured: </Card.Text>
                <Carousel>
                    {carouselItems ? carouselItems : (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )}
                </Carousel>
                <Card.Footer>
                    Aired on: {air_date}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default EpisodeCard