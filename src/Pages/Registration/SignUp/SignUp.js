import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './SignUp.css';

const SignUp = () => {
    const { registerUser, error } = useFirebase();
    const navigation = useNavigate();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        // setUser(data);
        const newData = {
            ...data,
            role: 'general'
        }
        registerUser(newData, navigation);
        
    };

    return (
        <div>
            <Container>
                <div className='regiContainer'>
                <h3 className='fw-bold mb-4 text-danger'>TrapCardz Registration</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='regiForm'>
                        <input {...register("firstName", { required: true })} placeholder='First Name' />
                        {errors.firstName && <p className='text-danger'>This field is required</p>}
                        <input {...register("lastName", { required: true })} placeholder='Last Name' />
                        {errors.lastName && <p className='text-danger'>This field is required</p>}
                        <input type="email" {...register("email", { required: true })} placeholder='Enter Email' />
                        {errors.email && <p className='text-danger'>This field is required</p>}
                        <input type="password" {...register("password", { required: true, minLength: 8  })} placeholder='Enter password' />
                        {errors.password && <p className='text-danger'>This field is required atleast 8 character.</p>}
                        {error && <p className='text-danger'>{error}</p>}
                        <input type="submit" className='regiButton' />
                        <p className='text-center'>Are you already register? <Link to='/login'
                                style={{ textDecoration: 'none' }}
                            >
                                please login
                            </Link></p>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default SignUp;