import React, { useEffect, useState } from 'react'
import { FormControl, TextField, Box, Button, Select, Modal, Card, } from "@mui/material";
import ApiClient from '../../../method/ApiClient';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Formik, useFormik } from 'formik';
import { Field } from 'formik';
import { useNavigate } from 'react-router-dom';

function UserProfilDataForm() {
    const navigate=useNavigate()
    const userID = JSON.parse(localStorage.getItem("UserLoginData"));
    const userId = userID.userId
    const [obj, setObj] = useState({ userId, isDefault: 'true' });
    // console.log('obj=>', obj)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fname: '',
            lname: '',
            email: '',
        },

        onSubmit: (values) => {
            handleSubmit(values);
        },
    });
    const handleSubmit = async (values) => {
        try {
            const response = await ApiClient.post('userprofiledata/addUserProfileData', values);
            // console.log('Response:', response);

        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className='mt-20'>
            <div className='flex m-5 '>
                <span className='text-5xl cursor-pointer' onClick={()=>navigate('/userdata')}><MdKeyboardArrowLeft /></span><span className='text-4xl mt-1'>Personal Information</span>
            </div>


            <div className='border rounded-3xl p-5' style={{ width: '50%', margin: '0 auto', boxShadow: 'gray 0px 0px 9px -4px' }}>
                <p className='text-lg mx-4'> Account Info</p>
                <form
                    style={{ marginTop: "5px", color: "white", }}

                    className="p-5 "
                >
                    <FormControl fullWidth>
                        <Box className="grid grid-cols-1 md:grid-cols-1 sm:w-full my-3 gap-2">
                            <TextField
                                className=" p-0 flname"
                                label="*Email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                helperText={formik.touched.email && formik.errors.email}
                                value={formik.values.email}

                            />
                        </Box>
                        <Box className="grid grid-cols-1 md:grid-cols-2 sm:w-full my-3 gap-2">
                            <TextField
                                className="m-8 p-0 flname"
                                label="*Frist Name"
                                id="fname"
                                name="fname"
                                onChange={formik.handleChange}
                                helperText={formik.touched.fname && formik.errors.fname}
                                value={formik.values.fname}

                            />
                            <TextField
                                className='flname'
                                label="*Last Name"
                                id="lname"
                                name="lname"
                                onChange={formik.handleChange}
                                helperText={formik.touched.lname && formik.errors.lname}
                                value={formik.values.lname}

                            />
                        </Box>







                        <Box
                            className="outer"
                            onClick={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                            }}
                        >
                            <div className="button1">
                                <button class="rounded p-2 text-center text" type="submit">
                                    SAVE
                                </button>
                            </div>
                        </Box>
                    </FormControl>
                </form>
            </div>

        </div>
    )
}

export default UserProfilDataForm
