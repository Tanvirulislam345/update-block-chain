import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PopularItems.css';

const PopularItems = () => {

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
            <Container>
                <h2 className="App fw-bold" style={{ color: 'white', paddingTop: '96px', paddingBottom: '64px' }}>Popular Item </h2>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {
                        allitems.filter(items => items.code === "popular").map(item => (
                            <Col
                                key={item._id}
                            >
                                <Card style={{ backgroundColor: '#0D0B0B', borderRadius: '5px' }}>
                                    <div style={{ display: 'flex', paddingTop: '15px' }}>
                                        <img src={item.profile1} alt='' width="50px" style={{ marginRight: '12px' }} />
                                        <div>
                                            <p style={{ marginBottom: '0', color: 'white' }}>{item.name}</p>
                                            <small style={{ color: 'gray' }}>{item.surname}</small>
                                        </div>
                                    </div>
                                    <Link to={`/allitems/${item._id}`} style={{ textDecoration: 'none' }}>
                                        <Card.Img variant="top" src={item.image} style={{ padding: '0px 10px', paddingTop: '22px' }} />
                                    </Link>
                                    <Card.Body>

                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Card style={{
                                                backgroundColor: '#000000', color: 'white', borderRadius: '50px',
                                                marginTop: '-30px', padding: '7px 53px'
                                            }}
                                                className='buttonShadow'
                                            >
                                                <span style={{ color: '#00FFD4', fontWeight: 'bold' }}>${item.price}k</span>
                                            </Card>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '17px' }}>
                                            <div>
                                                <Button variant="info" size="sm"
                                                    style={{ backgroundColor: '#11A2FA', color: 'white', border: 'none', borderRadius: '4px', padding: '13px 35px' }}
                                                    className='navButton'
                                                    onClick={() => console.log('This is arro function')}
                                                >
                                                    Buy Now
                                                </Button>
                                            </div>

                                            <div style={{ display: 'flex', alignItems: 'center', color: 'gray' }}>
                                                <i className="fas fa-heart fa-1x"
                                                    style={{ color: '#8D8D8D', marginRight: '10px' }}
                                                    onClick={() => updateFunction(item._id)}
                                                >
                                                </i>
                                                <span>{item.likes}</span>
                                            </div>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
                <div
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '56px', paddingBottom: '110px' }}
                >
                    <Link to='/nfts'>
                        <Button
                            variant="outline-info"
                            style={{ color: 'white', borderRadius: "4px", padding: "18px 36px" }}
                        >
                            See More
                        </Button>{' '}
                    </Link>
                </div>
            </Container>

        </div>
    );
};

export default PopularItems;