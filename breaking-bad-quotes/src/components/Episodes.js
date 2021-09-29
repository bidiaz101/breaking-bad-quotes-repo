import React, { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import SeasonList from "./SeasonList"
import EpisodeCard from "./EpisodeCard"

function Episodes() {
    const [episodeData, setEpisodeData] = useState([])
    const [chosenEpisode, setChosenEpisode] = useState("")

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad")
        .then(resp => resp.json())
        .then(data => setEpisodeData(data))
    }, [])

    console.log(chosenEpisode)
    return (
        <div>
            <h2>Episodes</h2>
            <Container>
                <Row>
                    <Col sm={4}>
                        <SeasonList episodeData={episodeData} setChosenEpisode={setChosenEpisode}/>
                    </Col>
                    <Col sm={8}>
                        {chosenEpisode ? <EpisodeCard chosenEpisode={chosenEpisode} />: <h3>Choose an Episode</h3>}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Episodes