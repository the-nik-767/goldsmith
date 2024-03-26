import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { getApidata } from '../../../Redux/Action/categoryAction';
import { getApidataAllProduct, } from '../../../Redux/Action/productAction';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { CURRENT_PRODUCT_FILTER } from '../../../Redux/Type/type';
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import './style/sidefilter.css'
import ApiClient from '../../../method/ApiClient';

function valuetext(value) {
  return `${value}°C`;
}
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

function SideFilter() {
  const [open, setOpen] = useState(0);
  const [value, setValue] = useState([0, 100]);
  const [filterApi, setFilterApi] = useState()
  const [checkedFilters, setCheckedFilters] = useState({});

  const dispatch = useDispatch();
  const location = useLocation();

  const searchParams1 = new URLSearchParams(location.search);

  const prdData = useSelector(state => state.product.data);
  const catData = useSelector(state => state.category.data);
  const handleOpen = (value) => { setOpen(open === value ? 0 : value); }

  const handleChange = (event, newValue) => { setValue(newValue); };

  useEffect(() => {
    dispatch(getApidata())
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, []);

  useEffect(() => {
    ApiClient.get('filter/getFilterInfo').then((response) => {
      setFilterApi(response.returnArr);
    });
    dispatch(getApidataAllProduct(null, checkedFilters));
  }, [checkedFilters])

  const handleCategoryClick = async (prdcategory) => {
    const catData = { ...checkedFilters, prdcategory: [prdcategory] };
    setCheckedFilters(catData);
    dispatch(getApidataAllProduct(null, catData));
  }

  const handleFilterChange = (value, filtername) => {

    if (checkedFilters[filtername]?.includes(value)) {
      const filteredData = checkedFilters[filtername].filter((ele) => ele !== value);
      setCheckedFilters((prev) => ({ ...prev, [filtername]: filteredData }));
    } else {
      if (Object.keys(checkedFilters).length && checkedFilters[filtername] && checkedFilters[filtername].length) {
        setCheckedFilters((prev) => ({ ...prev, [filtername]: [...checkedFilters[filtername], value] }));
      } else {
        if (!Object.keys(checkedFilters).length) {
          setCheckedFilters({ [filtername]: [value] });
        } else {
          setCheckedFilters((prev) => ({ ...prev, [filtername]: [value] }));
        }
      }
    }

  };

  const handleFilterData = (checkedFilters) => {
    let filteredData = prdData;

    filteredData = prdData.filter(item => {
      return item.prdprice >= value[0] && item.prdprice <= value[1];
    });

    for (const filtername in checkedFilters) {
      const filterValues = checkedFilters[filtername];
      if (filterValues.length > 0) {

        filteredData = filteredData.filter(item => filterValues.includes(item[filtername]));
      }
      else {
        setCheckedFilters({});
      }
      // filteredData = filteredData.filter(item => item[filtername] === checkedFilters[filtername]);
    }

    dispatch({ type: CURRENT_PRODUCT_FILTER, payload: filteredData });
  }
  // price
  useEffect(() => {
    const filteredData = prdData.filter(
      (item) => item.prdprice >= value[0] && item.prdprice <= value[1]
    );
    dispatch({ type: CURRENT_PRODUCT_FILTER, payload: filteredData });
  }, [value]);

  useEffect(() => {
    if (Object.keys(checkedFilters).length > 0) {
      handleFilterData(checkedFilters);
    }
  }, [checkedFilters])

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };
  
  const handleClearFilters = () => {
    setCheckedFilters({});
    dispatch({ type: CURRENT_PRODUCT_FILTER, payload: prdData });
  }
  return (
    <div className='w-72 ' style={{ marginTop: '32px', marginLeft: '10px' }}>
      <button onClick={handleClearFilters} className='flex'><IoMdClose /> Clear All</button>
      {/* Category */}
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}> category</AccordionHeader>
        <AccordionBody className=' cursor-pointer'>
          {([...new Set(prdData.map(ele => ele.prdcategory))]).map((category, index) => (
            <AccordionBody key={index} className="text-lg flex justify-between cursor-pointer" >
              <span>{category}</span>
              <span> <input type="checkbox"
                className='text-9xl p-2'
                checked={checkedFilters.prdcategory?.includes(category)}
                onClick={() => handleCategoryClick(category)} /></span>
            </AccordionBody>
          ))}
        </AccordionBody>
        {/* <AccordionBody>
          {prdData.map((ele, index) => (
            <AccordionBody key={index} className=" text-lg cursor-pointer" onClick={() => handleCategoryClick(ele.prdcategory)}>
             
              <span>{ele.prdcategory}</span>
            </AccordionBody>
          ))}
        </AccordionBody> */}
      </Accordion>

      {/* price */}
      <Accordion open={open === 20} icon={<Icon id={20} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(20)}>
          price
        </AccordionHeader>
        <AccordionBody>
          <Box sx={{ width: 200 }} className='mt-2 mb-5 ms-3 me-3'>
            <Typography id="range-slider" gutterBottom>
              Select Price Range:
            </Typography>
            <Slider
              value={value}
              onChange={rangeSelector}
              valueLabelDisplay="auto"
            />
            min {value[0]} /- and max {value[1]} /-

          </Box>
        </AccordionBody>
      </Accordion>

      {/* ALlfilter */}
      {filterApi?.map((x, index) => (
        <Accordion key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(index + 1)}>
            {x.filtername}
          </AccordionHeader>
          {
            x.filtervalue?.map((valueItem, i) => (
              <AccordionBody key={i} className='flex justify-between cursor-pointer' >
                <span className=' text-xl'>{valueItem.value}</span>
                <span> <input type="checkbox"
                  className='text-9xl p-2'
                  checked={checkedFilters[x.filtername]?.includes(valueItem.value)}
                  // checked={checkedFilters[x.filtername] === valueItem.value}
                  // onClick={() => handleFilterData(valueItem.value, x.filtername)} /></span>
                  onClick={() => handleFilterChange(valueItem.value, x.filtername)} /></span>
              </AccordionBody>
            ))
          }
        </Accordion>
      ))}

    </div>
  )
}

export default SideFilter
