import React from "react"
import {Container, Row, Col} from "react-bootstrap"

function CardContainer({children}) {
    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default CardContainer