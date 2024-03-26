import React, { useState } from 'react';
import { Link, json, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style/UserLogo.css'
import { useDispatch } from 'react-redux';
import { addApiDataINUser } from '../../../Redux/Action/userInfoAction';
import ApiClient from '../../../method/ApiClient';
import { USER_INFO } from '../../../Redux/Type/type';

const preventRefresh = (e) => {
    e.preventDefault();
};

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('password is required'),
    });
    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);

        try {
            // const response = await ApiClient.post('login', values);

            // const { token } = response;

            // localStorage.setItem('token', token);

            dispatch(addApiDataINUser(values));

            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }

        setSubmitting(false);
    };
    // const handleSubmit = async (values, { setSubmitting }) => {

    //     setSubmitting(false);

    //     dispatch(addApiDataINUser(values));
     
    // };

    return (
        <div className="wrapper signIn " >
            <div className="illustration">
                {/* <img src="https://media.istockphoto.com/id/1631394941/photo/green-emerald-and-white-diamond-necklace-earring-set.jpg?s=612x612&w=0&k=20&c=xXLHmRzuWInhMHI1H-3r6aesNzEuu9VZiBbHxOwqFm8=" alt="illustration" /> */}
            </div>
            <div className="form">
                <div className="heading">LOGIN</div>
                <Formik
                    initialValues={{
                        password: '',
                        email: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values, { setSubmitting });
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="email">E-Mail</label>
                                <Field type="email" id="email" name="email" placeholder="Enter your email" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="name" name="password" placeholder="Enter your password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                <p>
                    Don't have an account ? <Link to="/signup"> Sign Up </Link>
                </p>
                {/* <p><p onClick={()=>navigate("/forgetpassword")}>forget password?</p></p> */}
            </div>
        </div>
    );
}
