import React from "react"
import { Card, ListGroup, ListGroupItem } from "react-bootstrap"

function CharacterCard({character, quoteData}) {
    const { 
        name, 
        img, 
        nickname, 
        birthday, 
        status, 
        portrayed, 
        occupation, 
        appearance
    } = character

    const quoteLis = quoteData.filter(quoteObj => {
        if(quoteObj.author === "Hank Schrader" && name === "Henry Schrader") return quoteObj
        if(quoteObj.author === "Gus Fring" && name === "Gustavo Fring") return quoteObj
        if(quoteObj.author === name) return quoteObj
    }).map(quoteObj => <li>"{quoteObj.quote}"</li>)

    const jobLis = occupation.length > 1 ? occupation.map(job => <li key={job}>{job}</li>) : occupation.map(job => <p>{job}</p>)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Also known as: {nickname}</Card.Subtitle>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    DOB: {birthday}
                </ListGroupItem>
                <ListGroupItem>
                    Status: {status}
                </ListGroupItem>
                <ListGroupItem>
                    Occupation{occupation.length > 1 ? "s:" : ": "}
                    {occupation.length > 1 ? (
                        <ul>
                            {jobLis}
                        </ul> 
                    ) : jobLis}
                </ListGroupItem>
                <ListGroupItem>
                    Appears in Season{appearance.length > 1 ? "s: " : null } {appearance.join(", ")}
                </ListGroupItem>
                <ListGroupItem>
                    Portrayed by: {portrayed}
                </ListGroupItem>
                {quoteLis.length > 0 ? (<ListGroupItem>
                    <p><strong>Quotes: </strong></p>
                    <ul>
                        {quoteLis}
                    </ul>
                </ListGroupItem>) : null}
            </ListGroup>
        </Card>
    )
}

export default CharacterCard