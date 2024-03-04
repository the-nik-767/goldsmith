import React, { useEffect } from 'react'
import './style/queens.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApidataBestSeller } from '../../Redux/Action/categoryAction'
import AllFrenchCrown from '../FRENCHCROWNFORKINGS/AllFrenchCrown'
const SingleImgInQuenns = () => {


  let dispatch = useDispatch()
  useEffect(() => {
    // setLoading(true)
    dispatch(getApidataBestSeller())
    // setLoading(false)
  }, [])
  const data = useSelector(state => state.bestseller.data);
  return (
    <div>
      <div className=" text-center text-2xl mt-10 text-font header-color mb-8">
        <h2>BESTSELLING</h2>
      </div>
      <div className="flex flex-wrap justify-center ">
        {data.map((x, i) => {
          return <AllFrenchCrown key={i} {...x} cateimg={x.cateimg} catename={x.catename} />;
        })}
      </div>
    </div>
  );
}

export default SingleImgInQuenns