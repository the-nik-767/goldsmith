import React from 'react'
import { Link, json, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style/UserLogo.css'
import { useDispatch } from 'react-redux';
import { addApiDataINUser } from '../../../Redux/Action/userInfoAction';

function ForgetPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('password is required'),
    });
    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);


        setSubmitting(false);
    };
  return (
    <div>
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
                <p><a href=''>forget password?</a></p>
            </div>
    </div>
  )
}

export default ForgetPassword
