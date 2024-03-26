import React, { useEffect, useMemo, useState } from 'react';
import '../../newArrival/style/img.css';
import './style/ImgComp.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApidataAllProduct } from '../../../Redux/Action/productAction';
import AllItem from '../../newArrival/AllItem';
import { useLocation } from 'react-router-dom';
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ImgComp = ({ viewStyle, material }) => {

    let dispatch = useDispatch();
    const location = useLocation();
    const searchParams1 = new URLSearchParams(location.search);
    const prdid = searchParams1.get("id");

    const [itemsPerPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);
    const [discountEnabled, setDiscountEnabled] = useState(false);
    const [materialData, setMaterialData] = useState({});

    const allPrdData = useSelector(state => state.product.data);
    const currentFilterType = useSelector(state => state.product.filterType);
    useEffect(() => {
        if (prdid) {
            dispatch(getApidataAllProduct(prdid));
        } else {
            dispatch(getApidataAllProduct());
        }
    }, [prdid]);


    const next = () => {
        if (currentPage === 10) return;
        setCurrentPage(currentPage + 1);
    };

    const prev = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredItems = useMemo(() => {
        // let filteredData = prdid ? allPrdData?.filter((x) => x.categoryId == prdid) : allPrdData;
        let filteredData = allPrdData;
        if (discountEnabled) {
            filteredData = allPrdData.filter(item => item.prddiscount === 'enable');
        }
        if (materialData) {

            let material = allPrdData.filter(item => item.jwelleryMaterial == "Silver");
            filteredData = filteredData.filter(item => material.some(b => b.id === item.id));
        }
        return filteredData;
    }, [allPrdData, prdid, discountEnabled, currentFilterType, materialData]);


    const findMinMaxPrice = () => {
        if (filteredItems.length === 0) {
            return { minPrice: 0, maxPrice: 0 };
        }

        // let minPrice = filteredItems[0].prdprice;
        // let maxPrice = filteredItems[0].prdprice;
        let minPrice = Infinity;
        let maxPrice = 0;

        filteredItems.forEach(item => {
            if (item.prdprice < minPrice && item.prdprice < 50) {
                minPrice = item.prdprice;
            }
            if (item.prdprice > maxPrice && item.prdprice < 50) {
                maxPrice = item.prdprice;
            }
        });

        return { minPrice, maxPrice };
    }
    const { minPrice, maxPrice } = findMinMaxPrice();




    return (
        <div className="mt-8" style={{ width: '100%' }}>
            <div>
                <ul className='flex'>
                    <li><Button className='border' onClick={() => setDiscountEnabled(!discountEnabled)}>Discount</Button></li>
                    <li><Button className='border' onClick={() => setMaterialData(!materialData)}>Sliver</Button></li>
                    {/* <li><Button className='border'>{maxPrice}</Button></li> */}
                </ul>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4 gap-5' style={{ margin: '0px 20px' }}>
                {allPrdData.map((x, i) => (
                    <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                ))}
                {/* {currentFilterType && filteredItems ? (
                    currentFilterType.map((x, i) => (
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                ) : filteredItems ? (
                    filteredItems.map((x, i) => (
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                ) : (
                    allPrdData.map((x, i) => (
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                )} */}

            </div>
            <div className="flex items-center gap-8 justify-end">
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={prev}
                    disabled={currentPage === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                    Page <strong className="text-gray-900">{currentPage}</strong> of{" "}
                    <strong className="text-gray-900">10</strong>
                </Typography>
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={next}
                    disabled={currentPage === 10}
                >
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
            </div>
        </div>
    );
};

export default ImgComp;
{/* {filteredItems?.map((x, i) => (
                        <AllItem key={i} {...x}  prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice}/>
                    ))} */}
{/* {currentFilterType ? (
                    currentFilterType.map((x, i) => (
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                ) : (
                    allPrdData.map((x, i) => (
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                )} */}