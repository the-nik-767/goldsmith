import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { getApidata } from '../../../Redux/Action/categoryAction';
import { getApidataAllProduct, getApidataCatWisePrd } from '../../../Redux/Action/productAction';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

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
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams1 = new URLSearchParams(location.search);
  const prdid = searchParams1.get("id");
  // console.log(prdid)
  const catData = useSelector(state => state.categorywiseproduct.data);
  const prdData = useSelector(state => state.product.data);
  console.log('product data:', prdData);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = useSelector(state => state.category.data);

  useEffect(() => {

    dispatch(getApidata())
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    dispatch(getApidataAllProduct())
  }, [dispatch]);


  // const handleCategoryClick = async (categoryId) => {
  //   setSelectedCategoryId(categoryId); 
  //   try {
  //      dispatch(getApidataCatWisePrd(categoryId));
  //   } catch (error) {
  //     console.error("Error fetching category data:", error);
  //   }
  // };

  const handleCategoryClick = async (prdid) => {
    if (prdid) {
      const data = await dispatch(getApidataCatWisePrd(prdid));
    }

  }
  const uniqueDiamondTypes = [...new Set(prdData.map(item => item.diamond_type))];
  const uniqueColors = [...new Set(prdData.map(item => item.jwellery_color))];
  const uniqueCarats = [...new Set(prdData.map(item => item.gold_carats))];
  const uniqueMaterials = [...new Set(prdData.map(item => item.material))];
  return (
    <div className='w-56 ' style={{ marginTop: '32px', marginLeft: '10px' }}>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}> category</AccordionHeader>
        <AccordionBody>
          {data.map((item, index) => (
            <AccordionBody key={index} title={item.title} className=" text-lg cursor-pointer" onClick={() => handleCategoryClick(item.id)}>
              <p>{item.catename}</p>
            </AccordionBody>
          ))}
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          price
        </AccordionHeader>
        <AccordionBody>
          <Box sx={{ width: 300 }}>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Material
        </AccordionHeader>
        <AccordionBody>
          {uniqueMaterials.map((material, index) => (
            <AccordionBody key={index} title={material} className=" text-lg cursor-pointer">
              <p>{material}</p>
            </AccordionBody>
          ))}
        </AccordionBody>
      </Accordion>

      {/* <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Diamond Type
        </AccordionHeader>
        {prdData.map((item, index) => (
            <AccordionBody key={index} title={item.title} className=" text-lg cursor-pointer">
              <p>{item.diamond_type}</p>
            </AccordionBody>
          ))}
      </Accordion> */}

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          Diamond Type
        </AccordionHeader>
        {uniqueDiamondTypes.map((diamondType, index) => (
          <AccordionBody key={index} title={diamondType} className=" text-lg cursor-pointer">
            <p>{diamondType}</p>
          </AccordionBody>
        ))}
      </Accordion>

      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Jewellery color
        </AccordionHeader>
        {uniqueColors.map((jwelleryColor, index) => (
          <AccordionBody key={index} title={jwelleryColor} className=" text-lg cursor-pointer">
            <p>{jwelleryColor}</p>
          </AccordionBody>
        ))}
      </Accordion>

      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(6)}>
          Gold Carats
        </AccordionHeader>
        {uniqueCarats.map((goldCarat, index) => (
          <AccordionBody key={index} title={goldCarat} className=" text-lg cursor-pointer">
            <p>{goldCarat}</p>
          </AccordionBody>
        ))}
      </Accordion>

      {/* <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(7)}>
          Metal purity
        </AccordionHeader>
        <AccordionBody>

        </AccordionBody>
      </Accordion>

      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(8)}>
          Diamond Shape
        </AccordionHeader>
        <AccordionBody>

        </AccordionBody>
      </Accordion> */}

    </div>
  )
}

export default SideFilter
