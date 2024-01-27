import React from 'react'

const AllFrenchCrown = (props) => {
    return (
        <div className="flex justify-center mx-6 my-3 " >
            <div className=" rounded overflow-hidden mt-5 my-3 " style={{maxWidth:'100%', maxHeight:'100%', height:'100%'  ,width:'100% '}}>
                <div className="md:grid-cols-2">

                    <div
                        className=" object-cover bg-no-repeat origin-center  hover-effect icons " 
                        style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover" ,height:'70vh'  ,width:'100%'}}
                        alt={props.title}
                    >

                    </div>
                    <div className="Maintitle" >
                        <p className=' text-white title'>{props.title}</p>
                        <a href="" className=' hvr-sweep-to-right text-white  py-2 px-8 hover:bg-transparent  hover:border-solid border-2 +border-black hover:text-black button'>View All</a> </div>
             
                </div>
               
            </div>
        </div>
    )
}

export default AllFrenchCrown
