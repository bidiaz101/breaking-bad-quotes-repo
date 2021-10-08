import React, {useState} from "react"
import {Row, Col, ListGroup, Container} from "react-bootstrap"
import CharacterCard from "./CharacterCard"

function Characters({characterData, quoteData}) {
    const [search, setSearch] = useState("")
    const [chosenChar, setChosenChar] = useState({
        name: ""
    })

    function handleClick(name) {
        setChosenChar(characterData.find(character => character.name === name))
    }

    const characterList = characterData.filter(character => {
        if(search === "") return true 

        return character.name.toLowerCase().includes(search.toLowerCase())
    }).filter(character => character.category === "Breaking Bad").map(character => {
        return (
            <ListGroup.Item onClick={() => handleClick(character.name)} key={character.char_id}>{character.name}</ListGroup.Item>
        )
    })

    return (
        <div>
            <h2>Characters</h2>
            <Container>
                <Row>
                    <Col sm={4}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label>Search:</label>
                        <br />
                        <input type="text"  name="character" placeholder="Search Characters" onChange={(e) => setSearch(e.target.value)} />
                    </form>
                    <br />
                        <ListGroup>
                            {characterList}
                        </ListGroup>
                    </Col>
                    <Col sm={8}>
                        {chosenChar.name ? <CharacterCard character={chosenChar} quoteData={quoteData} /> : <h3>Choose a Character</h3>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Characters