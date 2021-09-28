import React from "react"
import { Accordion, ListGroup } from "react-bootstrap"

function SeasonList({ episodeData, setChosenEpisode }){
    const season1 = episodeData.filter(episode => episode.season === "1").map(episode => {
        return (
            <ListGroup.Item key={episode.episode_id} onClick={() => setChosenEpisode(episode)}>
                Episode {episode.episode}: {episode.title}
            </ListGroup.Item>
        )
    })

    const season2 = episodeData.filter(episode => episode.season === "2").map(episode => {
        return (
            <ListGroup.Item key={episode.episode_id} onClick={() => setChosenEpisode(episode)}>
                Episode {episode.episode}: {episode.title}
            </ListGroup.Item>
        )
    })

    const season3 = episodeData.filter(episode => episode.season === "3").map(episode => {
        return (
            <ListGroup.Item key={episode.episode_id} onClick={() => setChosenEpisode(episode)}>
                Episode {episode.episode}: {episode.title}
            </ListGroup.Item>
        )
    })

    const season4 = episodeData.filter(episode => episode.season === "4").map(episode => {
        return (
            <ListGroup.Item key={episode.episode_id} onClick={() => setChosenEpisode(episode)}>
                Episode {episode.episode}: {episode.title}
            </ListGroup.Item>
        )
    })

    const season5 = episodeData.filter(episode => episode.season === "5").map(episode => {
        return (
            <ListGroup.Item key={episode.episode_id} onClick={() => setChosenEpisode(episode)}>
                Episode {episode.episode}: {episode.title}
            </ListGroup.Item>
        )
    })

    return (
        <Accordion>
            <Accordion.Item eventKey="0" >
                <Accordion.Header>Season 1</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {season1}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Season 2</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {season2}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" >
                <Accordion.Header>Season 3</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {season3}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" >
                <Accordion.Header>Season 4</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {season4}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" >
                <Accordion.Header>Season 5</Accordion.Header>
                <Accordion.Body>
                    <ListGroup>
                        {season5}
                    </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default SeasonList