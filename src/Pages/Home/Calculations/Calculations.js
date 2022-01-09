import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Calculations = () => {
    return (
        <div style={{ background: '#26324B', paddingTop: '77px',paddingBottom: '77px'}}>
            <Container>
                <Row className='gy-5'>
                    <Col xs={12} sm={6} md={6} lg={3}
                        className="d-flex  justify-content-start justify-content-lg-center"
                        style={{ color: 'white' }}
                    >
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>$0.000000000631452</h4>
                            <small style={{ fontWeight: 'bold' }}>TrapCardz (TRAP/BNB)</small>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}  md={6} lg={3}
                        className="d-flex  justify-content-start justify-content-lg-center"
                        style={{ color: 'white'}}
                    >
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>$20,864,001.22</h4>
                            <small style={{ fontWeight: 'bold' }}>Market Cap</small>
                        </div>
                    </Col>
                    <Col xs={12} sm={6}  md={6} lg={3}
                     className="d-flex  justify-content-start justify-content-lg-center"
                        style={{ color: 'white' }}
                    >
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>$171,938.52</h4>
                            <small style={{ fontWeight: 'bold' }}>Sales Volume (24h)</small>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3}
                        className="d-flex  justify-content-start justify-content-lg-center"
                        style={{ color: 'white' }}
                    >
                        <div>
                            <h4 style={{ fontWeight: 'bold' }}>696</h4>
                            <small style={{ fontWeight: 'bold' }}>Total Sales (24h)</small>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Calculations;