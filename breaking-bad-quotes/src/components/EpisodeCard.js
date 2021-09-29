import React from "react"
import { Card, Carousel } from "react-bootstrap"

function EpisodeCard({chosenEpisode, characterData}) {
    // console.log(characterData)

    const {air_date, characters, episode, episode_id, season, title} = chosenEpisode
    const featCharacters = characters.map(featCharacter => {
        return characterData.find(character => {
            if((featCharacter === "Hank Schrader" && character.name === "Henry Schrader") || (featCharacter === "Krazy-8" && character.name === "Domingo Molina") || (featCharacter === "Ted Beneke" && character.name === "Theodore Beneke") || (featCharacter === "Badger" && character.name === "Brandon Mayhew") || (featCharacter === "Ken Wins" && character.name === "Ken") || ((featCharacter === "Elliott Schwarts" || featCharacter === "Eliott Schwartz") && character.name === "Elliot Schwartz") || (featCharacter === "Gretchen Swartz" && character.name === "Gretchen Schwartz") || (featCharacter === "Combo" && character.name === "Christian Ortgea") || (featCharacter === "The cousins" && character.name === "Marco & Leonel Salamanca")){ 
                return character
            } else if (character.name === featCharacter) {
                return character.img
            }
        })
    })

    console.log(characters, featCharacters)

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
                    {carouselItems}
                </Carousel>
                <Card.Footer>
                    Aired on: {air_date}
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}

export default EpisodeCard