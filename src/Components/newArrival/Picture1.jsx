import React, { useEffect, useState } from 'react'
import AllItem from './AllItem';
import './style/img.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApidataAllProduct } from '../../Redux/Action/productAction';

const Picture1 = () => {


    let navigate = useNavigate()
    let dispatch = useDispatch()

    const navigateCategory = () => {
        navigate('/category')
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        // // setLoading(true)
        dispatch(getApidataAllProduct())
        // // setLoading(false)

    }, [])

    const data = useSelector(state => state.product.data);

    return (
        <div>
            {/* <hr className='mt-5 mb-5 ' /> */}
            <div className=" text-center text-2xl font-mono mt-14 mb-10 header-font allHeaderText" ><h2 className='text-font header-color'>NEW ARRIVAL DESIGN</h2></div>
            <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4  md:mx-7 aaaa" style={{ margin: '0px 20px' }}>
                {
                    data.slice(0, 8).map((x, i) => {
                        return (
                            <AllItem key={i} {...x} />
                        )
                    })
                }
            </div>
            <div className="outer flex justify-center">
                <div className="button1 mt-10 ">
                    <button
                        className="rounded p-2 text-center text " style={{ width: '150px' }}
                        type="button"
                        onClick={navigateCategory}
                    >
                        View All
                    </button>
                </div>
            </div>
            <hr className='mt-8 mb-10 ' />
        </div>
    )
}

export default Picture1
