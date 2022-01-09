import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import './CommentsForm.css';

const CommentsForm = () => {
    const { itemId } = useParams();
    let navigate = useNavigate()
    const [items, setItems] = useState({});
    const [allitems, setAllItems] = useState([]);

    useEffect(() => {
        const uri = `http://localhost:9000/allitems/${itemId}`;
        console.log(uri)
        fetch(uri)
            .then(res => res.json())
            .then(data => setItems(data))
        // .then(data => console.log(data))
    }, [itemId]);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const newData = {
            ...data,

            image: `${items.image}`,
            name: `${items.name}`,
            code: `${items.code}`,
            price: `${items.price}`,
            likes: `${items.likes}`

        }
        axios.post('http://localhost:9000/allitems/comments', newData)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Comments is succefully post.');
                    reset();
                }
            })
        console.log(newData);
    }


    const updateFunction = (id) => {

        const uri = `http://localhost:9000/allitems/${id}`;
        fetch(uri, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Are you sure to like this ? ');
                }
            });

    }

    useEffect(() => {
        fetch('http://localhost:9000/allitems/comments/all')
            .then(res => res.json())
            .then(data => setAllItems(data))
        // .then(data => console.log(data))
    }, []);

    const returnBack = () => {
        navigate('/');
    }


    return (
        <div style={{ minHeight: '100vh' }} className='py-5 bannerStyle'>
            <Container>
                <h2 className="App fw-bold  pb-3" style={{ color: 'white' }}>Comments for this item</h2>
                <Row xs={1} sm={2} md={2}
                    className='gy-5'
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Col xs={10} sm={4} md={4}>
                        <img src={items.image} alt="" style={{ width: '100%' }} />
                    </Col>
                    <Col xs={10} sm={8} md={6}>

                        <form onSubmit={handleSubmit(onSubmit)} className="form">
                            <textarea type="text" {...register("comments")}
                                rows="7"
                                style={{ padding: '10px' }}
                                placeholder='Enter your comment'
                                className='commentbox' /> <br />
                            <input type="submit" value="post" className='px-4 py-1 me-5' />
                            <i
                                className="far fa-2x fa-thumbs-up"
                                style={{ color: 'green' }}
                                onClick={() => updateFunction(itemId)}>
                            </i>
                        </form>

                        <h5 className="fw-bold pt-5" style={{ color: 'white' }}>comments</h5>
                        <Row xs={1} sm={2} md={2} lg={2} className="g-4">
                            {
                                allitems.filter(products => products.name === items.name).map(item => (
                                    <Col
                                        key={item._id}
                                    >
                                        <Card style={{ backgroundColor: '#0D0B0B', borderRadius: '5px' }}>
                                            <div style={{ padding: '10px', color: 'white' }}>
                                                <p style={{ color: 'white', marginBottom: '3px' }}>{item.comments}</p>
                                                <div>
                                                    <small className='pe-5'>{item.name}</small>
                                                    <i className="far fa-thumbs-up me-1">
                                                    </i> {/* <span>{item.likes}</span> */}
                                                </div>
                                            </div>

                                        </Card>
                                    </Col>
                                ))}
                        </Row>

                        <Button
                            style={{ backgroundColor: 'gray', marginTop: '20px' }}
                            onClick={() => returnBack()}
                        >Return back</Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default CommentsForm;