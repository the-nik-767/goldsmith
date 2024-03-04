// // import React from 'react'
// // import { useEffect, useState } from 'react';
// // import {
// //     FormControl,
// //     TextField,
// //     Box,
// //     MenuItem,
// // } from "@mui/material";
// // import { useFormik } from "formik";
// // import * as yup from "yup";
// // import { Country, State } from 'country-state-city';
// // import PhoneInput from 'react-phone-input-2'
// // import 'react-phone-input-2/lib/style.css'
// // import '../style/checkout.css'


// // const StateDropDownFrom = ({ formik }) => {
// //     const [states, setStates] = useState([]);
// //     const [countries, setCountries] = useState([]);

// //     useEffect(() => {
// //         const fetchCountries = () => {
// //             const countryData = Country.getAllCountries();
// //             console.log("Fetched countries:", countryData);
// //             setCountries(countryData);
// //         };
// //         fetchCountries();
// //     }, []);


// //     const handleCountryChange = (event) => {
// //         const selectedCountry = event.target.value;
// //         console.log("Selected country:", event);
// //         formik.setFieldValue('country', selectedCountry);
// //         formik.setFieldValue('state', '');

// //         const countryStates = State.getStatesOfCountry(selectedCountry);
// //         console.log("States of selected country:", countryStates);
// //         setStates(countryStates);
// //     };


// //     // const handleStateChange = (event) => {
// //     //     const selectedState = event.target.value;
// //     //     formik.setFieldValue('state', selectedState);
// //     // };

// //     return (
// //         <div>
// //             <Box className="flex justify-around ">
// //                 <TextField
// //                     className='m-8 p-0'
// //                     label="*Postal/Zip code"
// //                     id="pincode"
// //                     onChange={formik.handleChange}
// //                     error={formik.touched.pincode && Boolean(formik.errors.pincode)}
// //                     helperText={formik.touched.pincode && formik.errors.pincode}
// //                     variant="standard"
// //                     value={formik.values.pincode}
// //                     style={{ marginBottom: '10px', marginTop: "10px", width: '48% ', fontSize: '25px' }}
// //                 />
// //                 <TextField
// //                     label="*City"
// //                     id="city"
// //                     name="city"
// //                     onChange={formik.handleChange}
// //                     error={formik.touched.city && Boolean(formik.errors.city)}
// //                     helperText={formik.touched.city && formik.errors.city}
// //                     variant="standard"
// //                     value={formik.values.city}
// //                     style={{ marginBottom: '10px', marginTop: "10px", width: '48% ' }}
// //                 >
// //                     {countries.map((country) => (
// //                         <MenuItem key={country.id} value={country.name}>
// //                             {country.name}
// //                         </MenuItem>
// //                     ))}
// //                 </TextField>
// //             </Box>

// //             <Box className="flex justify-around">
// //                 <TextField
// //                     label="*Country"
// //                     id="country"
// //                     name="country"
// //                     select
// //                     onBlur={formik.handleBlur}
// //                     onChange={handleCountryChange}
// //                     value={formik.values.country}
// //                     error={formik.touched.country && Boolean(formik.errors.country)}
// //                     helperText={formik.touched.country && formik.errors.country}
// //                     variant="standard"
// //                     style={{ marginBottom: '10px', marginTop: '10px', width: '48%', fontSize: '25px', }}
// //                     SelectProps={{
// //                         MenuProps: {
// //                             PaperProps: {
// //                                 style: {
// //                                     maxHeight: '20vh',
// //                                     width: '10vw',
// //                                     padding: '10px'
// //                                 },
// //                             },
// //                         },
// //                         renderValue: (selected) => selected,
// //                     }}
// //                 >
// //                     {countries.map((country) => (
// //                         <MenuItem key={country.id} value={country.name}>
// //                             {/* {console.log("country-----", country)} */}
// //                             {country.name}
// //                         </MenuItem>
// //                     ))}
// //                 </TextField>

// //                 <TextField
// //                     label="*State"
// //                     id="state"
// //                     name="state"
// //                     select
// //                     onBlur={formik.handleBlur}
// //                     onChange={formik.handleChange}
// //                     value={formik.values.state}
// //                     // value={country.i}
// //                     error={formik.touched.state && Boolean(formik.errors.state)}
// //                     helperText={formik.touched.state && formik.errors.state}
// //                     variant="standard"
// //                     style={{ marginBottom: '10px', marginTop: '10px', width: '48%', fontSize: '25px' }}
// //                     SelectProps={{
// //                         MenuProps: {
// //                             PaperProps: {
// //                                 style: {
// //                                     maxHeight: '20vh',
// //                                     width: '10vw',
// //                                     padding: '10px'
// //                                 },
// //                             },
// //                         },
// //                         renderValue: (selected) => selected,
// //                     }}
// //                 >
// //                     {states.map((state) => (
// //                         <MenuItem MenuItem key = { state.id } value = { state.isoCode } >
// //                         { console.log('state.isoCode-----', state.isoCode) }
// //                             { state.name }
// //                         </MenuItem>
// //                     ))}
// //             </TextField>
// //         </Box>
// //         </div >
// //     )
// // }

// // export default StateDropDownFrom


// // import React, { useEffect, useState } from 'react';
// // import {
// //     FormControl,
// //     TextField,
// //     Box,
// //     MenuItem,
// // } from "@mui/material";
// // import { useFormik } from "formik";
// // import * as yup from "yup";
// // import { Country, State, City } from 'country-state-city';
// // import Select from "react-select";
// // import 'react-phone-input-2/lib/style.css';
// // import '../style/checkout.css';

// // const StateDropDownForm = ({ formik }) => {
// //     const [states, setStates] = useState([]);
// //     const [countries, setCountries] = useState([]);
// //     const [selectedCountry, setSelectedCountry] = useState(null);
// //     const [selectedState, setSelectedState] = useState(null);
// //     const [selectedCity, setSelectedCity] = useState(null);

// //     useEffect(() => {
// //         const fetchCountries = () => {
// //             const countryData = Country.getAllCountries();
// //             console.log("Fetched countries:", countryData);
// //             setCountries(countryData);
// //         };
// //         fetchCountries();
// //     }, []);

// //     const handleCountryChange = (item) => {
// //         setSelectedCountry(item);
// //         formik.setFieldValue('country', item ? item.name : '');
// //         formik.setFieldValue('state', '');

// //         const countryStates = State.getStatesOfCountry(item ? item.isoCode : '');
// //         console.log("States of selected country:", countryStates);
// //         setStates(countryStates);
// //     };

// //     const handleStateChange = (item) => {
// //         setSelectedState(item);
// //         formik.setFieldValue('state', item ? item.name : '');
// //     };

// //     const handleCityChange = (item) => {
// //         setSelectedCity(item);
// //         formik.setFieldValue('city', item ? item.name : '');
// //     };

// //     return (
// //         <div>
// //             <Box className="flex justify-around ">
// //                 <TextField
// //                     className='m-8 p-0'
// //                     label="*Postal/Zip code"
// //                     id="pincode"
// //                     onChange={formik.handleChange}
// //                     error={formik.touched.pincode && Boolean(formik.errors.pincode)}
// //                     helperText={formik.touched.pincode && formik.errors.pincode}
// //                     variant="standard"
// //                     value={formik.values.pincode}
// //                     style={{ marginBottom: '10px', marginTop: "10px", width: '48% ', fontSize: '25px' }}
// //                 />
// //                 <TextField
// //                     label="*City"
// //                     id="city"
// //                     name="city"
// //                     onChange={formik.handleChange}
// //                     error={formik.touched.city && Boolean(formik.errors.city)}
// //                     helperText={formik.touched.city && formik.errors.city}
// //                     variant="standard"
// //                     value={formik.values.city}
// //                     style={{ marginBottom: '10px', marginTop: "10px", width: '48% ' }}
// //                 >
// //                     {countries.map((country) => (
// //                         <MenuItem key={country.id} value={country.name}>
// //                             {country.name}
// //                         </MenuItem>
// //                     ))}
// //                 </TextField>
// //             </Box>

// //             <Box className="flex justify-around">
// //                 <Select
// //                     options={countries}
// //                     getOptionLabel={(options) => options.name}
// //                     getOptionValue={(options) => options.name}
// //                     value={selectedCountry}
// //                     onChange={handleCountryChange}
// //                     placeholder="Select Country"
// //                 />
// //                 <Select
// //                     options={states}
// //                     getOptionLabel={(options) => options.name}
// //                     getOptionValue={(options) => options.name}
// //                     value={selectedState}
// //                     onChange={handleStateChange}
// //                     placeholder="Select State"
// //                 />
// //                 <Select
// //                     options={City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode)}
// //                     getOptionLabel={(options) => options.name}
// //                     getOptionValue={(options) => options.name}
// //                     value={selectedCity}
// //                     onChange={handleCityChange}
// //                     placeholder="Select City"
// //                 />
// //             </Box>
// //         </div>
// //     );
// // }

// // export default StateDropDownForm;


import React, { useEffect, useState } from 'react';
import {
    FormControl,
    TextField,
    Box,
    MenuItem,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { Country, State, City } from 'country-state-city';
import Select from "react-select";
import 'react-phone-input-2/lib/style.css';
import '../style/checkout.css';

const validationSchema = yup.object({
    pincode: yup.string().required('Postal/Zip code is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
    state: yup.string().required('State is required'),
});

const StateDropDownForm = () => {
    const initialValues = {
        pincode: '',
        city: '',
        country: '',
        state: '',
    };
    const [states, setStates] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const fetchCountries = () => {
            const countryData = Country.getAllCountries();
            console.log("Fetched countries:", countryData);
            setCountries(countryData);
        };
        fetchCountries();
    }, []);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            // Add your submission logic here
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

    return (
        <form onSubmit={formik.handleSubmit}>
            <Box className="flex justify-around ">
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
                    style={{ marginBottom: '10px', marginTop: "10px", width: '48% ', fontSize: '25px' }}
                />
                <TextField
                    label="*City"
                    id="city"
                    name="city"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    variant="standard"
                    value={formik.values.city}
                    style={{ marginBottom: '10px', marginTop: "10px", width: '48% ' }}
                >
                    {countries.map((country) => (
                        <MenuItem key={country.id} value={country.name}>
                            {country.name}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            <Box className="flex justify-around">
                <Select
                    options={countries}
                    getOptionLabel={(options) => options.name}
                    getOptionValue={(options) => options.name}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    onBlur={() => formik.setFieldTouched('country', true)}
                    placeholder="Select Country"
                />
                <Select
                    options={states}
                    getOptionLabel={(options) => options.name}
                    getOptionValue={(options) => options.name}
                    value={selectedState}
                    onChange={handleStateChange}
                    onBlur={() => formik.setFieldTouched('state', true)}
                    placeholder="Select State"
                />
                <Select
                    options={City.getCitiesOfState(selectedState?.countryCode, selectedState?.isoCode)}
                    getOptionLabel={(options) => options.name}
                    getOptionValue={(options) => options.name}
                    value={selectedCity}
                    onChange={handleCityChange}
                    onBlur={() => formik.setFieldTouched('city', true)}
                    placeholder="Select City"
                />
            </Box>
            <button type="submit">Submit</button>
        </form>
    );
}

export default StateDropDownForm;

