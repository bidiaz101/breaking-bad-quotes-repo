import React, { useEffect, useState } from "react"
import { Accordion, Container } from "react-bootstrap"

function Deaths({ characterData }) {
    const [deathData, setDeathData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/deaths")
        .then(resp => resp.json())
        .then(data => setDeathData(data))
    }, [])

    const accordionOfDeath = deathData.sort((death1, death2) => death1.episode - death2.episode)
    .sort((death1, death2) => death1.season - death2.season)
    .filter(death => death.death.toLowerCase().includes(search.toLowerCase()))
    .map(death => {
        const character = characterData.find(character => character.name === death.death)

        return (
            <Accordion.Item key={death.death_id} eventKey={death.death_id}>
                <Accordion.Header>{death.death}</Accordion.Header>
                <Accordion.Body>
                    {character ? <img className="imgOfTheFallen" src={character.img} alt={character.name} /> : null}
                    <p>Occured in: Season {death.season}, Episode {death.episode}</p>
                    <p>Cause of Death: {death.cause}</p>
                    <p>Last Words: {death.last_words}</p>
                    {death.number_of_deaths > 1 ? <p>Number of Deaths: {death.number_of_deaths}</p> : null}
                    <p>Responsible: {death.responsible}</p>
                </Accordion.Body>
            </Accordion.Item>
        )
    })

    return (
        <>
            <h2>Deaths</h2>
            <p><strong>Warning: </strong>Strong language and gruesome details lie below</p>
            <form>
                <label>Search by Victim: </label>
                <br />
                <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
                <hr />
            </form>
            <Accordion id="accordion-of-death">
                {accordionOfDeath}
            </Accordion>
        </>
    )
}

export default Deaths