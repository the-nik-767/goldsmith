import React from 'react'
import { useEffect, useState } from 'react';
import {
    FormControl,
    TextField,
    Box,
    MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Country, State, City } from 'country-state-city';
import Navbar from '../../../Header/Navbar/Navbar';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import '../style/checkout.css'
import Select from "react-select";

const AllField = ({ onSubmit, setStep, step }) => {
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [phone, setPhone] = useState('');

    const [userArray, setUserArray] = useState(JSON.parse(localStorage.getItem("userArray")) || []);

    useEffect(() => {
        const fetchCountries = () => {
            const countryData = Country.getAllCountries();
            console.log("Fetched countries:", countryData);
            setCountries(countryData);
        };
        fetchCountries();

        const storedUserArray = JSON.parse(localStorage.getItem("userArray")) || [];
        setUserArray(storedUserArray);

    }, []);

    const defaultValue = {
        fname: '',
        lname: '',
        addLine1: '',
        addLine2: '',
        pincode: '',
        city: '',
        email: '',
        country: '',
        state: '',
        phone: '',
    };

    const validationSchema = yup.object({
        fname: yup.string("fname").required("Please Enter Your Name"),
        lname: yup.string("lname").required("Please Enter Your Last Name"),
        addLine1: yup.string("addLine1").required("Please Your Addresss"),
        addLine2: yup.string("addLine2").required("Please Your Addresss"),
        pincode: yup.string("pincode").required("Please Your pincode"),
        city: yup.string("city").required("Please Your city"),
        email: yup.string("email").required("Please Your email"),
        country: yup.string("country").required("Please select a country"),
        state: yup.string("state").required("Please select a state"),
        phone: yup.string("phone").required("Please Enter a phone number")

    })
    const handleSubmit = (values) => {
        // console.log("handle submit values, formikBag", values);
        const newUser = { ...values, phone, country: formik.values.country, state: formik.values.state };

        const existingUserArray = JSON.parse(localStorage.getItem("userArray")) || [];

        const updatedUserArray = [newUser];

        localStorage.setItem("userArray", JSON.stringify(updatedUserArray));

        setUserArray(updatedUserArray);
        formik.resetForm();
        onSubmit();
        setStep(++step)

    };
    const formik = useFormik({
        initialValues: defaultValue,
        validationSchema,
        onSubmit: (values) => {
            console.log("Form submitted:", values);
            handleSubmit(values);
        },
    });
    const handleCountryChange = (item) => {
        setSelectedCountry(item);
        formik.setFieldValue('country', item ? item.name : '');
        formik.setFieldValue('state', '');

        const countryStates = State.getStatesOfCountry(item ? item.isoCode : '');
        console.log("States of selected country:", countryStates);
        setStates(countryStates);
    };

    const handleStateChange = (item) => {
        setSelectedState(item);
        formik.setFieldValue('state', item ? item.name : '');
    };

    const handleCityChange = (item) => {
        setSelectedCity(item);
        formik.setFieldValue('city', item ? item.name : '');
    };
    //  console.log('step:', step);
    return (
        <div className='checkout-info-container p grid grid-cols-1 md:grid-cols-1'>
             <h2 className="text-slate-700 font-medium font-3xl  p-5 sm:text-xl " style={{ fontFamily:'monospace', backgroundColor:'#e7e6e573',fontSize: '34px'}} >Personal Info  </h2><hr />
            <form style={{ marginTop: '5px', color:'white' }} onSubmit={formik.handleSubmit} className='p-5'>
                <FormControl fullWidth>
                    <Box className="grid grid-cols-1 md:grid-cols-2 sm:w-full   ">
                        <TextField
                            className='m-8 p-0'
                            label="*Frist Name"
                            id="fname"
                            name='fname'
                            onChange={formik.handleChange}
                            error={formik.touched.fname && Boolean(formik.errors.fname)}
                            helperText={formik.touched.fname && formik.errors.fname}
                            variant="standard"
                            value={formik.values.fname}
                            style={{ marginBottom: '10px', marginTop: "10px", width: '99% ', fontSize: '25px' }}
                        />
                        <TextField
                            label="*Last Name"
                            id="lname"
                            name='lname'
                            onChange={formik.handleChange}
                            error={formik.touched.lname && Boolean(formik.errors.lname)}
                            helperText={formik.touched.lname && formik.errors.lname}
                            variant="standard"
                            value={formik.values.lname}
                            style={{ marginBottom: '10px', marginTop: "10px", width: '99% ' }}
                        />
                    </Box>
                    <Box className=" ">
                        <TextField
                            className='m-8 p-0'
                            label="*Adress Line 1"
                            id="addLine1"
                            name='addLine1'
                            onChange={formik.handleChange}
                            error={formik.touched.addLine1 && Boolean(formik.errors.addLine1)}
                            helperText={formik.touched.addLine1 && formik.errors.addLine1}
                            variant="standard"
                            value={formik.values.addLine1}
                            style={{ marginBottom: '10px', marginTop: "10px", width: '98.09% ', fontSize: '25px',  }}
                        />

                    </Box>
                    <Box className=" ">
                        <TextField
                            className='m-8 p-0'
                            label="*Adress Line 1"
                            id="addLine2"
                            name='addLine2'
                            onChange={formik.handleChange}
                            error={formik.touched.addLine2 && Boolean(formik.errors.addLine2)}
                            helperText={formik.touched.addLine2 && formik.errors.addLine2}
                            variant="standard"
                            value={formik.values.addLine2}
                            style={{ marginBottom: '10px', marginTop: "10px", width: '98.09% ', fontSize: '25px',  }}
                        />

                    </Box>

                    <Box className="">
                        <Box className="">
                            <TextField
                                className='m-8 p-0'
                                label="*Postal/Zip code"
                                id="pincode"
                                name="pincode"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                                helperText={formik.touched.pincode && formik.errors.pincode}
                                variant="standard"
                                value={formik.values.pincode}
                                style={{ marginBottom: '10px', marginTop: "10px", width: '99% ', fontSize: '25px' }}
                            />
                        </Box>
                    </Box>
                    <Box className="text-black grid grid-flow-row auto-rows-max md:grid-cols-3 country1" >
                        <Box>
                            <Box className="" style={{ borderBottom: '1px solid gray' }}>

                                <Select
                                    className=''
                                    name='country'
                                    label='country'
                                    options={countries}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                    onBlur={() => formik.setFieldTouched('country', true)}
                                    placeholder="Select Country"
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            border: 'none', 
                                            boxShadow: 'none', 
                                        }),
                                        menu: (provided, state) => ({
                                            ...provided,
                                            border: 'none', 
                                            boxShadow: 'none', 
                                        }),
                                    }}
                                />
                            </Box>
                            <Box>
                                {formik.touched.country && formik.errors.country ? (
                                    <div className=" text-red-800 errorFont ms-4" >{formik.errors.country}</div>
                                ) : null}
                            </Box>
                        </Box>

                        <Box>
                            <Box className="" style={{ borderBottom: '1px solid gray' }}>
                                <Select
                                    className='sm:w-14'
                                    options={states}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    onBlur={() => formik.setFieldTouched('state', true)}
                                    placeholder="Select State"
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            border: 'none', 
                                            boxShadow: 'none', 
                                        }),
                                        menu: (provided, state) => ({
                                            ...provided,
                                            border: 'none',
                                            boxShadow: 'none', 
                                        }),
                                    }}
                                />
                            </Box>
                            <Box>
                                {formik.touched.state && formik.errors.state ? (
                                    <div className=" text-red-800  ms-4 errorFont">{formik.errors.state}</div>
                                ) : null}
                            </Box>
                        </Box>
                        <Box>
                            <Box className="" style={{ borderBottom: '1px solid gray' }}>
                                <Select
                                    options={City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode)}
                                    getOptionLabel={(options) => options.name}
                                    getOptionValue={(options) => options.name}
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    onBlur={() => formik.setFieldTouched('city', true)}
                                    placeholder="Select City"
                                    styles={{
                                        control: (provided, state) => ({
                                            ...provided,
                                            border: 'none', 
                                            boxShadow: 'none', 
                                        }),
                                        menu: (provided, state) => ({
                                            ...provided,
                                            border: 'none', 
                                            boxShadow: 'none', 
                                        }),
                                    }}
                                /></Box>
                            <Box>
                                {formik.touched.city && formik.errors.city ? (
                                    <div className=" text-red-800 ms-4 errorFont">{formik.errors.city}</div>
                                ) : null}
                            </Box>
                        </Box>
                    </Box>
                    <Box className="grid grid-cols-1 md:grid-cols-2  ">

                        <TextField
                            className=' p-0  '
                            label="*Email"
                            id="email"
                            name='email'
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="standard"
                            value={formik.values.email}
                            style={{ marginBottom: '10px', marginTop: "10px", width: '99% ', fontSize: '25px',  }}
                        />

                        <Box>
                            <PhoneInput
                                label="*Phone"
                                country={'us'}
                                value={phone}
                                onChange={(phone) => {
                                    setPhone(phone);
                                    formik.setFieldValue('phone', phone);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                variant="standard"
                                inputStyle={{ fontSize: '14px', height: '6vh', color:'black' ,width:'100%' }}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className=" text-red-800 ms-8 errorFont"  >{formik.errors.phone}</div>
                            ) : null}
                        </Box>

                    </Box>
                   
                    <Box class="outer"  onClick={(e) => {
                                e.preventDefault();
                                formik.handleSubmit();
                            }}>
                        <div class="button1">
                            {/* <div class="text">button</div> */}
                            <button
                            class="rounded p-2 text-center text"
                            type="submit"
                           
                        >
                            Submit
                        </button>
                        </div>
                    </Box>
                </FormControl>
            </form>
        </div>
    )
}

export default AllField
