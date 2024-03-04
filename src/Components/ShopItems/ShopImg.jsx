import React, { useEffect, useState } from "react";
import "./ShopInfoMain/ShopInfoMain.css";
import arr from "../../product.json"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { ShopSlider } from "./ShopSlider";
import { getApidataOnePrdData} from "../../Redux/Action/productAction";
import { useDispatch, useSelector } from "react-redux";


export const ShopImg = () => {
  
  let navigate = useNavigate()
  let dispatch = useDispatch()

  const location = useLocation();
  const searchParams1 = new URLSearchParams(location.search);
  const imgid = searchParams1.get("id");
  // console.log('location',location)

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedImageId, setSelectedImageId] = useState();

  const handleImageClick = (id) => {
    setSelectedImageId(id);
    // setSearchParams({id});
  };

//   useEffect( () => {
//     // // setLoading(true)
//      dispatch(getApidataOnePrdData(imgid))
//     // // setLoading(false)
    
// }, [])

const data = useSelector(state => state.oneproduct.data);

  return (
    <div className="shopimgflex">
    {data && <ShopSlider selectedImageId={selectedImageId} images={data } />}
    {/* {console.log('data.images',data)} */}
    {/* <div style={{ width: "25%" }} className="shopimg">
      {data && data.map((x, index) => (
        x.prdimg && JSON.parse(x.prdimg).map((image, i) => (
          <img
            key={`${index}-${i}`}
            src={image.url}
            alt={x.title}
            style={{ height: "90px", width: "95px", marginTop: "0px" }}
            onClick={() => handleImageClick(x.id)}
          />
        ))
      ))}
    </div> */}
  </div>
   
  );
};


