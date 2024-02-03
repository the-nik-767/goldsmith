import React from 'react'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AllItem = (props) => {
  let navigate = useNavigate()
  const navigateShop = () => {
    navigate('/shop')
  }
  return (
    <>
      <div className="flex justify-center " >
        <div className=" rounded overflow-hidden mt-5 my-3 " style={{ maxWidth: '100%', maxHeight: '100%' , height:'100%'  ,width:'100%'}}>
          <div className="md:grid-cols-2  ">
            <div className="img-hover-zoom--slowmo">
            <div
              className="img object-cover bg-no-repeat origin-center  img-hover-zoom--slowmo-img  icons bg-center" 
              style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover" ,height:'60vh'  ,width:'100%'}}
              onClick={navigateShop}
              alt={props.title}
            /></div> 
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center text-black">
                {props.title} 
              </div>
              <div className="font-bold text-xl mb-2 text-center text-black" >
                {props.price}
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </>
  )
}

export default AllItem