import { useFormik } from 'formik';
import React, { useState } from 'react'
import { FormControl, TextField, Box, Button, Select, Modal, Card, } from "@mui/material";
import ApiClient from '../../../method/ApiClient';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function UserAddressData() {
    const navigate=useNavigate()
    const userID = JSON.parse(localStorage.getItem("UserLoginData"));
    const userId = userID.userId
    const [obj, setObj] = useState({ userId, isDefault: 'true' });
    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: {
            addLine1: '',
            addLine2: '',
            pincode: '',
            city: '',
            country: '',
            state: '',
            userId, 
            isDefault: 'true'
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
                <span className='text-5xl cursor-pointer' onClick={() =>navigate('/userdata')}><MdKeyboardArrowLeft /></span>
                <span className='text-4xl mt-1'>My Address</span>
            </div>


            <div className='border rounded-3xl p-5' style={{ width: '50%', margin: '0 auto', boxShadow: 'gray 0px 0px 9px -4px' }}>
                <p className='text-lg mx-4'> Account Info</p>
                <form
                    style={{ marginTop: "5px", color: "white", }}

                    className="p-5 "
                >
                    <FormControl fullWidth>
                        <Box className="grid grid-cols-1 md:grid-cols-2 my-3 gap-2">
                            <TextField
                                className="m-8 p-0 addline"
                                label="*Adress Line 1"
                                id="addLine1"
                                name="addLine1"
                                onChange={formik.handleChange}

                                helperText={formik.touched.addLine1 && formik.errors.addLine1}
                                value={formik.values.addLine1}

                            />
                            <TextField
                                className="m-8 p-0 addline"
                                label="*Adress Line 2"
                                id="addLine2"
                                name="addLine2"
                                onChange={formik.handleChange}

                                helperText={formik.touched.addLine2 && formik.errors.addLine2}
                                value={formik.values.addLine2}

                            />
                        </Box>

                        <Box className="grid grid-cols-1 md:grid-cols-1 my-3 gap-2">

                            <TextField
                                className="m-8 p-0 flname"
                                label="*Postal/Zip code"
                                id="pincode"
                                name="pincode"
                                type="number"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                helperText={formik.touched.pincode && formik.errors.pincode}
                                value={formik.values.pincode}

                            />


                        </Box>
                        <Box className="my-3 text-black grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 country1 gap-2">
                            <Box>

                                <TextField
                                    className="m-8 p-0 flname"
                                    label="*Country Name"
                                    id="Country"
                                    name="country"
                                    type="string"
                                    onChange={formik.handleChange}
                                />
                            </Box>
                            <Box>

                                <TextField
                                    className="m-8 p-0 flname"
                                    label="*state Name"
                                    id="state"
                                    name="state"
                                    type="string"
                                    onChange={formik.handleChange}
                                />
                            </Box>
                            <Box>

                                <TextField
                                    className="m-8 p-0 flname"
                                    label="*City Name"
                                    id="City"
                                    name="city"
                                    type="string"
                                    onChange={formik.handleChange}
                                />
                            </Box>
                        </Box>
                        <Box className="grid grid-cols-1 md:grid-cols-2  ">



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

export default UserAddressData
