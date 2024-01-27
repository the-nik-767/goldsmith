import React from 'react'
import { FaPlus } from "react-icons/fa";

const AllItem = (props) => {
  return (
    <>
      <div className="flex justify-center " >
        <div className=" rounded overflow-hidden mt-5 my-3 " style={{ maxWidth: '100%', maxHeight: '100%' , height:'100'  ,width:'100%'}}>
          <div className="md:grid-cols-2">

            <div
              className=" object-cover bg-no-repeat origin-center  hover-effect icons " 
              style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover" ,height:'60vh'  ,width:'100%'}}

              alt={props.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center text-black">
                {props.title}
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default AllItem