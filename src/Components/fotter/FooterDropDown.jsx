import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CountryFlag from 'react-country-flag';


const FooterDropDown = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v2/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };
    return (
        <>

            <div className="flex justify-between mt-14 ">
                {/* <div className='ms-5 mb-10'>
                    <select
                        id="country"
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.alpha2Code} value={country.name}>
                                <CountryFlag countryCode={country.alpha2Code} svg style={{ marginRight: '8px' }} />
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div > */}
                <div className="text-gray-600 text-thin">
                    <p>© 2024 FRENCH CROWN STORE. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

        </>
    )
}

export default FooterDropDown
