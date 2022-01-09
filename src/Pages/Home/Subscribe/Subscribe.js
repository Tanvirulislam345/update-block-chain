import React from 'react';
import { Button, Card, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div style={{ backgroundColor: '#0B172E', color: 'white' }}
        className='subscribe'
        >
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ backgroundColor: '#253149', display: 'flex', flexDirection: 'column',padding: '77px 10px', borderRadius: '4px' }}
                className='col-sm-12 col-md-10 col-lg-8'
                >
                    <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Never miss a drop</h1>
                    <p style={{ textAlign: 'center', paddingLeft: '5px', paddingRight: '5px' }}>Subscribe for the latest news, drops & collectibles</p>


                    <div className='row' style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '0px' }}>
                        <div className='col-sm-12 col-md-10 col-lg-8 p-0'>
                            <div className="input-group mb-3" style={{ backgroundColor: '#0B172E', borderRadius: '4px' }}>
                                <input type="text" className="form-control m-1"
                                 placeholder="Enter your Email" 
                                 aria-label="Recipient's username" 
                                 aria-describedby="button-addon2" 
                                 style={{borderRadius: '4px', backgroundColor: '#0B172E', border: 'none', paddingLeft: '20px'}}
                                 />
                                <button className="btn btn-outline-secondary m-1 navButton" type="button" 
                                id="button-addon2"
                                style={{borderRadius: '4px', padding: '12px 25px', color: 'white'}}
                                >Subscribe</button>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default Subscribe;
