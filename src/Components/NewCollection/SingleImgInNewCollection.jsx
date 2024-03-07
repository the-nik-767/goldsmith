import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApidataNewCollection } from '../../Redux/Action/categoryAction'
import AllFrenchCrown from '../All Category/AllFrenchCrown'

const SingleImgInNewCollection = () => {

const [loading, setLoading] = useState(false)
   
    let dispatch = useDispatch()
    useEffect( () => {
        setLoading(true)
         dispatch(getApidataNewCollection())
        setLoading(false)
    }, [])
    const data = useSelector(state => state.newcollection.data);
return (
  <div>
    <div className=" text-center text-2xl mt-10 text-font header-color">
      <h2>NEW COLLECTION</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2   justify-center mt-8" >
      {data.map((x, i) => {
        return <AllFrenchCrown key={i} {...x} cateimg={x.cateimg} catename={x.catename} />;
      })}
    </div>
  </div>
);
}

export default SingleImgInNewCollection
