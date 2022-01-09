import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './TeamMeeting.css';

const TeamMeeting = () => {
    const features = [
        {
            id: 1,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Meet the Team"

        },
        {
            id: 2,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Irene Jara Art Designer"

        },
        {
            id: 3,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Jeff Mori Marketing Manager"

        },
        {
            id: 4,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Mike Gavrilos Finance"

        },
        {
            id: 5,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Michael Kim Chief Operating Officer"

        },
        {
            id: 6,
            image: "https://i.ibb.co/cNgrYpg/71e1e453b31e05c97db879fe07cf3c2b.png",
            name: "Michael McMath Chief Exec.Officer"
        }
    ];
    return (
        <div>
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Col xs={12} sm={12} md={8} lg={5}>
                        <h1 className="App fw-bold teamHeader" style={{ color: 'white', margin: '0px' }}>Meet the team </h1>
                        <p className="App" style={{ color: 'white', textAlign: 'center', paddingTop: '16px', paddingBottom: '65px', margin: '0px' }}>
                            For us, it’s all about introducing you to our team! Providing transparency and sort of a personal touch.
                        </p>
                    </Col>
                </Row>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row xs={1} sm={1} md={2} lg={3} className="row gy-5" style={{ width: '68%' }}>
                        {
                            features.map(feature => (
                                <Col
                                    key={feature.id}
                                    className="mx-auto"
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <Card style={{ backgroundColor: '#0D0B0B', borderRadius: '5px', width: '211px', paddingTop: '31px', paddingBottom: '31px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '25px' }}>
                                            <Card.Img variant="top" src={feature.image} style={{ width: '108px' }} />
                                        </div>
                                        <Card.Body>
                                            <h6 style={{ color: 'white', textAlign: 'center' }}>{feature.name}</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default TeamMeeting;