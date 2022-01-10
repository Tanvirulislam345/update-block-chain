import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import logo from '../../../Images/nfticons/logo.png';
import pic from '../../../Images/nfticons/pic.png';
import share from '../../../Images/nfticons/share.png';
import active from '../../../Images/nfticons/active.png';
import active2 from '../../../Images/nfticons/active2.png';
import note from '../../../Images/nfticons/note.png';
import list from '../../../Images/nfticons/listitem.png';
import create from '../../../Images/nfticons/create.png';
import useFirebase from '../../../hooks/useFirebase';

const ShowNFT = () => {
    const [items, setItems] = useState([]);

    // const { user, loading } = useFirebase();
    // if (loading) {
    //     return <div className="App">
    //         <Spinner animation="grow" />
    //     </div>
    // }



    useEffect(() => {
        fetch('http://localhost:9000/create-nft')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    console.log(items);


    return (
        <div style={{ background: '#F9F9FB', paddingBottom: '200px' }}>
            <div className="container" >
                <div className="row">
                    <div>
                        <div style={{ height: '185px', background: '#1F5597', borderRadius: '5px', display: 'flex', justifyContent: 'center' }}>
                            <div className="w-100" style={{ textAlign: 'center', margin: 'auto' }}>
                                <img src={logo} className=" " style={{ width: '35%' }} alt="" />
                            </div>
                            <div>
                                <img style={{ height: '30px', marginTop: '10px', marginRight: '10px' }} src={share} alt="" />
                            </div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <div style={{ textAlign: 'start', marginLeft: '50px' }}>
                                    <img style={{ marginTop: '-50px', height: '125px', }} src={pic} alt="" />

                                </div>
                                <div className="ps-4 pt-3">
                                    <div className="d-flex">
                                        <h5>Zodeyak World</h5>
                                        <img className="ms-3 " style={{ width: '20px', height: '20px' }} src={active} alt="" />
                                    </div>
                                    <div className='d-flex'>
                                        <p className='text-secondary'>0x9102dc2….90a1c807c</p>

                                        <img className="ms-4" src={active2} style={{ width: '20px', height: '20px' }} alt="" />

                                    </div>
                                </div>
                            </div>

                            <div className='text-end pt-3'>
                                <p className='pb-2 fw-bold m-0'>Joined May 2021</p>
                                <img src={note} style={{ width: '20px', height: '20px' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" d-flex ">
                    <div className='me-auto'>
                        <Form.Control type="text"
                            placeholder="Normal text"
                        />
                    </div>
                    <div className="d-flex ">
                        <div>
                            <Button ><i className="fas fa-images"></i> Collection 12</Button>
                        </div>
                        <div>
                            <Button variant="light"><img src={list} style={{ height: '20px', weight: '20px' }} alt="" /> Listed 9</Button>
                        </div>
                        <div>
                            <Button variant="light"><img src={create} style={{ height: '20px', weight: '20px' }} alt="" /> Created 9</Button>
                        </div>
                        <div>
                            <Button variant="light"><i className="fas fa-heart"></i> Favorited 9</Button>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '35px' }}>
                    <Row xs={1} sm={1} md={3}
                        className='row g-3'
                        style={{ marginButton: '35px' }}>
                        {
                            items.map(item => <Col
                                key={item._id}
                            >
                                <Card>
                                    <Card.Img variant="top" src={`data:image/jpeg;base64, ${item.file}`} height="217px" width="100%" />
                                    <Card.Body style={{ padding: '24px 20px' }}>
                                        <small>First Collection</small>
                                        <h5 className='fw-bold'>Whip Sport 2008</h5>
                                        <div
                                            style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '46px' }}
                                        >
                                            <small><i className="far fa-eye pe-3"></i>views(20)</small>
                                            <i className="fas fa-download"></i>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        }
                    </Row>
                </div>

            </div>
        </div>
    );
};


export default ShowNFT;