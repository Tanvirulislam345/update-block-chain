import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const SignIn = () => {
    const { userSignIn, error } = useFirebase();
    const location = useLocation();
    const navigation = useNavigate();
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        userSignIn(data, location, navigation);
    };

    return (
        <div>
            <Container>
                <div className='regiContainer'>
                    <h3 className='fw-bold mb-4 text-danger'>TrapCardz LogIn</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='regiForm'>
                        <input type="email" {...register("email", { required: true })} placeholder='Enter Email' />
                        {errors.email && <p className='text-danger'>This field is required</p>}
                        <input type="password" {...register("password", { required: true, minLength: 8  })} placeholder='Enter password' />
                        {errors.password && <p className='text-danger'>This field is required atleast 8 character.</p>}
                        {error && <p className='text-danger'>{error}</p>}
                        <input type="submit" value='Login' className='regiButton' />
                        <p className='text-center'>
                        New Users? <Link to='/signup'
                                style={{ textDecoration: 'none' }}
                            >
                                Please Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default SignIn;