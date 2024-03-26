import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './style/UserLogo.css'
import ApiClient from "../../../method/ApiClient";

export default function Signup() {
    const navigator = useNavigate()
    const [userdata, setUserData] = useState();
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("*First Name is required"),
        lastName: Yup.string().required("*Last Name is required"),
        email: Yup.string().email("*Invalid email").required("*Email is required"),
        password: Yup.string().required("*Password is required").min(8, "*Password must be at least 8 characters"),
        state: Yup.string().required("*State is required"),
        country: Yup.string().required("*Country is required"),
        pincode: Yup.number().required("*Pincode is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "*Passwords must match")
            .required("*Confirm Password is required"),
    });

    const handlesubmit = async (userData) => {
        try {
            const res = await ApiClient.post('user/register', userData);
            setUserData(res)
            if (res.error === 'User already exists') {
                alert("User already exists. Please try with a different email.");
            } else {
                alert("Registration successful.");
            }
            navigator("/login");
            return res.registerData;
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className="wrapper signUp">
            <div className="illustration">
                {/* <img
          src="https://media.istockphoto.com/id/1631394941/photo/green-emerald-and-white-diamond-necklace-earring-set.jpg?s=612x612&w=0&k=20&c=xXLHmRzuWInhMHI1H-3r6aesNzEuu9VZiBbHxOwqFm8="
          alt="illustration"
        /> */}
            </div>
            <div className="form">
                <div className="heading">CREATE AN ACCOUNT</div>

                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        state: "",
                        country: "",
                        pincode: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        const userData = {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            password: values.password,
                            state: values.state,
                            country: values.country,
                            pincode: values.pincode,
                        };
                        handlesubmit(userData)
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="firstName">First Name</label>
                                    <Field type="text" id="firstName" name="firstName" placeholder="Enter your First name" />
                                    <ErrorMessage name="firstName" component="div" className="error" />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name</label>
                                    <Field type="text" id="lastName" name="lastName" placeholder="Enter your Last name" />
                                    <ErrorMessage name="lastName" component="div" className="error" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label htmlFor="email">E-Mail</label>
                                    <Field type="email" id="email" name="email" placeholder="Enter your email" />
                                    <ErrorMessage name="email" component="div" className="error" />
                                </div>
                                <div>
                                    <label htmlFor="PinCodes">PinCodes Number</label>
                                    <Field type="number" id="PinCodes" name="pincode" placeholder="Enter your pincode" />
                                    <ErrorMessage name="pincode" component="div" className="error" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <label htmlFor="password">Password</label>
                                <Field type="password" id="password" name="password" placeholder="Enter your password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                            </div>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                            <div>
                                <label htmlFor="state">State</label>
                                <Field type="text" id="state" name="state" placeholder="state" />
                                <ErrorMessage name="state" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="country">country</label>
                                <Field type="text" id="country" name="country" placeholder="Enter your country" />
                                <ErrorMessage name="country" component="div" className="error" />
                            </div>
                            </div>

                          
                           
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
                <h2 align="center" className="or">
                    OR
                </h2>
                <p>
                    Have an account ? <Link to="/login"> Login </Link>
                </p>
            </div>
        </div>
    );
}
