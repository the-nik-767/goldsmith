import React, { useEffect, useState } from 'react';
import '../../newArrival/style/img.css';
import './style/ImgComp.css';
import { useDispatch, useSelector } from 'react-redux';
import { getApidataAllProduct, getApidataCatWisePrd } from '../../../Redux/Action/productAction';
import AllItem from '../../newArrival/AllItem';
import { useLocation } from 'react-router-dom';
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ImgComp = ({ viewStyle }) => {
    
    let dispatch = useDispatch();
    const location = useLocation();
    const searchParams1 = new URLSearchParams(location.search);
    const prdid = searchParams1.get("id");
    const [itemsPerPage] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(getApidataAllProduct());
        
        if (prdid) {
            dispatch(getApidataCatWisePrd(prdid));
        }
    }, [prdid]);

    const allPrdData = useSelector(state => state.product.data);
    // console.log('all prdData',allPrdData[0].diamond_type);

    // const diamonadType= allPrdData.map((item,index)=> {
    //     console.log(item.diamond_type);
    // })
    const catData = useSelector(state => state.categorywiseproduct.data);
   

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


    const currentItems = catData && catData.length ? catData.slice(indexOfFirstItem, indexOfLastItem) : allPrdData.slice(indexOfFirstItem, indexOfLastItem);
    
    
    return (
        <div className="mt-8" style={{ width: '100%' }}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4 gap-5' style={{ margin: '0px 20px' }}>
                {currentItems.map((x, i) => (
                    <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                ))}
            </div>
            {/* {prdid ? (
                    catData.map((x, i) => (
                        // console.log("catex----",x),
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                ) : (
                    allPrdData.map((x, i) => (
                        // console.log('dhfg',x),
                        <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} />
                    ))
                )} */}
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
