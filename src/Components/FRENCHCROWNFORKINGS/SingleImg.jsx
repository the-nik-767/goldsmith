import React, { useEffect, useState } from 'react'
import AllFrenchCrown from './AllFrenchCrown'
import './style/frenchcroen.css'
import { useDispatch, useSelector } from 'react-redux'
import { getApidata } from '../../Redux/Action/categoryAction'

const SingleImg = () => {
    const [loading, setLoading] = useState(false)
    let arr = [
        { cateimg: 'https://images.unsplash.com/photo-1567601617142-366d870579a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBqZXdlbHJ5fGVufDB8fDB8fHww', 'catename': 'RING' },
        { cateimg: 'https://plus.unsplash.com/premium_photo-1673285096761-79e49ff5b760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D', 'catename': 'SILVER CHAIN' },
        { cateimg: 'https://images.unsplash.com/photo-1613498510372-8901cad084a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D', 'catename': 'GOLD CHAIN' },
        { cateimg: 'https://images.unsplash.com/photo-1504650777861-79c63a32f607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8', 'catename': 'BRACELET' },
        { cateimg: 'https://images.unsplash.com/photo-1628785517892-dbcd2f2719ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D', 'catename': 'BRACELET' },
        { cateimg: 'https://images.unsplash.com/photo-1575863062446-e5f64b4880b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D', 'catename': 'NET-LACE' },
        { cateimg: 'https://images.unsplash.com/photo-1613498510372-8901cad084a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D', 'catename': 'CHAIN' },
        { cateimg: 'https://images.unsplash.com/photo-1554301840-913d3250f757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBqZXdlbHJ5fGVufDB8fDB8fHww', 'catename': 'WATCH' },
        { cateimg: 'https://images.unsplash.com/photo-1567601617142-366d870579a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBqZXdlbHJ5fGVufDB8fDB8fHww', 'catename': 'RING' },
    ];
    // let dispatch = useDispatch()
    // useEffect( () => {
    //     setLoading(true)
    //      dispatch(getApidata())
    //     setLoading(false)
    // }, [])
    // const data = useSelector(state => state.category.data);

    return (
      <>
        <div className=" text-center text-2xl mt-10 text-font header-color">
          <h2>ALL CATEGORY</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-clos-3 justify-center mt-8">
          {/* {
                    data.map((x, i) => {
                        return (
                            <AllFrenchCrown key={i} Img={x.cateimg  } title={x.catename} />
                        )
                    })
                } */}
          {arr.map((x, i) => {
            return (
              <AllFrenchCrown
                key={i}
                cateimg={x.cateimg}
                catename={x.catename}
              />
            );
          })}
        </div>
      </>
    );
}
export default SingleImg
