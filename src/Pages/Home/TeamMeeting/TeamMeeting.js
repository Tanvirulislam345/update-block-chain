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
                <div className='teamHeading'>
                    <h1>Meet the team </h1>
                    <p>
                        For us, it’s all about introducing you to our team! Providing transparency and sort of a personal touch.
                    </p>
                </div>


                <div className='meetingMember'>
                    <Row xs={1} sm={1} md={2} lg={3} className="row g-5">
                        {
                            features.map(feature => (
                                <Col
                                    key={feature.id}
                                >
                                    <Card className='meetingCard' style={{backgroundColor: '#0D0B0B'}}>
                                        <Card.Img variant="top" src={feature.image}/>
                                        <h6>{feature.name}</h6>
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