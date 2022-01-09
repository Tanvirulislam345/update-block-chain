import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import brandlogo from '../../../Images/brandlogo.png';
import discord from '../../../Images/icons/discord.svg';
import twitter from '../../../Images/icons/twitter.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerCover">
            <Container >
                <Row className="row gy-4">
                    <Col xs={12} sm={12} md={4}>
                        <div className="footerLink">
                            <img src={brandlogo} alt="" width="60%" />
                            <p style={{ color: '#9798B4', textAlign: 'start', width: '75%' }}>Creating and minting NFTs in the Easiest and most efficient way.</p>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={2} className="d-flex justify-content-sm-start justify-content-md-center">
                        <div className="footerLink">
                            <h4>Service</h4>
                            <p className="link">Your NFTs</p>
                            <p className="link">Integrations</p>
                            <p className="link">Import / Export</p>
                            <p className="link">Marketplace</p>
                            <p className="link">Tutorials</p>
                        </div>
                    </Col>
                    <Col xs={6} sm={6} md={3} className="d-flex justify-content-sm-start justify-content-md-center">
                        <div className="footerLink">
                            <h4>Company</h4>
                            <p className="link">Buy Trapcardz</p>
                            <p className="link">About Us</p>
                            <p className="link">Contact Us</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="d-flex justify-content-sm-start justify-content-md-center">
                        <div className="footerLink">
                            <h4>Social Media</h4>
                            <div>
                                <img src={discord} alt="" style={{ marginRight: '15px' }} />
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-4'>
                    <p className="copyright pb-2"><small>Designed by AHMED 2021. All right reserved</small></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;