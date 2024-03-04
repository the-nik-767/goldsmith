import React, { useEffect, useState } from 'react'
import AllFrenchCrown from './AllFrenchCrown'
import './style/frenchcroen.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApidata } from '../../Redux/Action/categoryAction'
import { Card, CardBody } from '@material-tailwind/react'
import { IKImage } from 'imagekitio-react'

const SingleImg = () => {
    const [loading, setLoading] = useState(false)
   
    let dispatch = useDispatch()
    useEffect( () => {
        setLoading(true)
        dispatch(getApidata())
        setLoading(false)
    }, [])
    const data = useSelector(state => state.category.data);

    return (
      <div>
        <div className=" text-center text-2xl mt-10 text-font header-color">
          <h2>ALL CATEGORY</h2>
        </div>
        {/* <div className="flex flex-wrap justify-center  mt-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mt-8">
          {
                    data.map((x, i) => {
                        return (
                            <AllFrenchCrown key={i} {...x} cateimg={x.cateimg} catename={x.catename} /> 
                        )
                    })
                }
          
        </div>
      </div>
    );
}
export default SingleImg
