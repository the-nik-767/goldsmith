import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { getUserData } from '../../../Redux/Action/productAction';
import { AiFillHome } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaPencilAlt } from "react-icons/fa";
import Login from './Login';
import { useFormik } from "formik";
import { Country, State, City } from 'country-state-city';
import { FormControl, TextField, Box, Button, Select, Modal, Card, } from "@mui/material";
import ApiClient from '../../../method/ApiClient';
import { FaUserTag } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { SiHomebridge } from "react-icons/si";
import { MdOutlinePayment } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

function UserProfileData() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [openUserData, setOpenUserData] = useState(false);
    const userID = JSON.parse(localStorage.getItem("UserLoginData"));
    const userId = userID.userId
    const [obj, setObj] = useState({ userId, isDefault: 'true' });
    // console.log('obj=>', obj)
    const userData = useSelector(state => state.product.userData)
    useEffect(() => {
        dispatch(getUserData(userId))
    }, [userId])


    const formatPhoneNumber = (phoneNumber, countryCode) => {
        const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode);
        if (parsedNumber) {
            return parsedNumber.formatNational();
        } else {
            return phoneNumber;
        }
    };

    const handleOpenUserData = () => { setOpenUserData(true); }

    const handleCloseUserData = () => { setOpenUserData(false); }

    useEffect(() => {
        const fetchCountries = () => {
            const countryData = Country.getAllCountries();
            setCountries(countryData);
        };
        fetchCountries();
    }, []);

    const handleCountryChange = (item) => {
        setSelectedCountry(item);
        const countryStates = State.getStatesOfCountry(item ? item.isoCode : '');
        setStates(countryStates);
    };

    const handleStateChange = (item) => {
        setSelectedState(item);
    };

    const handleCityChange = (item) => {
        setSelectedCity(item);
    };
    const getData = (e) => {
        setObj(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    useEffect(() => {
        if (userId) {
            ApiClient.get('userprofiledata/getUserProfileData').then((data) => {
                console.log(data.profileData)
                setObj(data.profileData);
            })
        }
    }, [])

    const handleSubmit = async (obj) => {
        try {
            const response = await ApiClient.post('userprofiledata/addUserProfileData', obj);
            setObj(response)
            // console.log('Response:', response);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className='mt-24'>
            <div className='flex m-5 text-2xl cursor-pointer' onClick={() => navigate("/")}>
                <p className='text-5xl cursor-pointer'><MdKeyboardArrowLeft /></p> <p className='text-4xl mt-1'>Home</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-center m-16'>
                <div class="max-w-sm rounded overflow-hidden  cursor-pointer" style={{ boxShadow: 'gray 0px 0px 9px -4px' }} onClick={() => navigate("/userdata/userperinfo")}>
                    <div class="px-6 py-4">
                        <div class="font-bold text-9xl flex justify-center mb-2"><FaUserTag /></div>
                        <p class=" text-xl flex justify-between">
                            <span>Personal Information</span> <span><MdKeyboardDoubleArrowRight /></span>
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden  cursor-pointer" style={{ boxShadow: 'gray 0px 0px 9px -4px' }} onClick={() => navigate("/userdata/useradd")}>
                    <div class="px-6 py-4">
                        <div class="font-bold text-9xl flex justify-center mb-2"><SiHomebridge /></div>
                        <p class=" text-xl flex justify-between">
                            <span>My Address</span> <span><MdKeyboardDoubleArrowRight /></span>
                        </p>
                    </div>
                </div>
                <div class="max-w-sm rounded overflow-hidden  cursor-pointer" style={{ boxShadow: 'gray 0px 0px 9px -4px' }} >
                    <div class="px-6 py-4">
                        <div class="font-bold text-9xl flex justify-center mb-2"><MdOutlinePayment /></div>
                        <p class=" text-xl flex justify-between">
                            <span>Payment Method</span> <span><MdKeyboardDoubleArrowRight /></span>
                        </p>
                    </div>
                </div>
            </div>
           
            {/* <div className='mt-4 grid grid-cols-1 md:grid-cols-3' >
                <div className='flex border m-5 p-2 justify-center bg-gray-100 align-center max-w-sm rounded overflow-hidden '>
                    <div>
                        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className='w-40 h-40' />
                    </div>

                    <div>
                        {userData.map((item, index) => (
                            <div key={index} className='flex'>
                                <div className='ms-2'>
                                    <p className='text-xl tracking-widest leading-loose'>{item.fname} {item.lname}</p>
                                    <p className='text-lg tracking-wide'>Email:  {item.email}</p>
                                    <p className='text-lg tracking-wide'>Mobile: +{formatPhoneNumber(item.phone)}</p>
                                    <p className='text-lg tracking-wide'>Address: {item.addLine1}, {item.country}</p>
                                    <br />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex'>
                      
                        <p  onClick={handleOpenUserData}><FaPencilAlt /></p><p className='ms-2'>Edit</p>
                        <Modal
                            open={openUserData}
                            onClose={handleCloseUserData}
                            aria-labelledby="parent-modal-title"
                            aria-describedby="parent-modal-description"

                        >
                            <Box sx={{ margin: "0 auto ", }} className='bg-white'>
                            
                            </Box>
                        </Modal>
                    </div>
                </div>

                <div class="max-w-sm rounded overflow-hidden shadow-lg border-black m-5">
                    <div className='flex justify-end'>
                        <div className='flex justify-end'>
                            <p><FaPencilAlt /></p><p className='ms-2 me-2'>Edit</p>
                        </div>
                       

                    </div>
                    <p className='flex pl-6 pt-4'><span className='text-xl'><AiFillHome /></span> <span>MY ADDRESSES</span></p>
                    <div class="px-6 py-4">
                        {
                            userData.map((item, index) => (
                                <div key={index}>
                                    <span className=' text-xl tracking-widest leading-loose'>{item.city}</span>
                                    <p className='text-lg tracking-wide'>{item.fname}  {item.lname}</p>
                                    <p className='text-lg tracking-wide'> {item.addLine1} {item.addLine2} , {item.city}-{item.pincode} {item.country}</p>
                                    <p className='text-lg tracking-wide'> +{formatPhoneNumber(item.phone)}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div> */} 


        </div>
    )
}

export default UserProfileData
