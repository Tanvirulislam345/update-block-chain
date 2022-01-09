import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Features.css';

const Features = () => {

    const [allitems, setAllItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/allitems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, []);


    const updateFunction = (id) => {

        const proced = window.confirm('Are you sure to like this ?');

        if (proced) {
            const uri = `http://localhost:9000/allitems/${id}`;
            fetch(uri, {
                method: 'PUT'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        // alert('Are you sure to like this ? ');
                        fetch('http://localhost:9000/allitems')
                            .then(res => res.json())
                            .then(data => setAllItems(data))
                    }
                });
        }
    }

    return (
        <div>
            <Container >
                <h2 className="App fw-bold featuresHead" style={{ color: 'white' }}>Featured Assets </h2>
                <Row xs={1} sm={2} md={2} lg={4} className="g-4">
                    {
                        allitems.filter(items => items.code === "featured").map(item => (
                            <Col
                                key={item._id}
                            >
                                <Card style={{ backgroundColor: '#0D0B0B', borderRadius: '10px' }}>
                                    <Link to={`/allitems/${item._id}`} style={{ textDecoration: 'none' }}>
                                        <Card.Img variant="top" src={item.image}  />
                                    </Link>
                                    <Card.Body>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <div>
                                                <img src={item.profile1} alt='' width="35px" className='me-1' />
                                                <img src={item.profile2} alt='' width="35px" />
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                                                <i className="fab fa-gratipay fa-2x"
                                                    style={{ color: '#262525', marginRight: '10px' }}
                                                    onClick={() => updateFunction(item._id)}
                                                >
                                                </i>
                                                <span style={{ color: '#C2C2C2' }}>{item.likes} Likes</span>
                                            </div>
                                        </div>
                                        <Card.Title style={{ color: 'white', paddingTop: '24px', paddingBottom: '22px' }}>{item.name}</Card.Title>
                                        <Card style={{ backgroundColor: '#1D1D1D', color: 'gray', borderRadius: '8px'}}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 8px' }}>
                                                <span style={{ color: '#C2C2C2' }}>Current Price</span>
                                                <span style={{ color: '#C2C2C2' }}>{item.price} ETH</span>
                                            </div>
                                        </Card>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </Container>
        </div>
    );
};

export default Features;