import React from 'react'

const AllImgQueens = (props) => {
        return (
        <>
            
             <div className="flex justify-center mx-6 my-3 " >
            <div className=" rounded overflow-hidden mt-5 my-3 " style={{maxWidth:'100%', maxHeight:'100%'}}>
                <div className="md:grid-cols-2">

                    <div
                        className=" object-cover bg-no-repeat origin-center  hover-effect icons " 
                        style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover" ,height:'800px'  ,width:'600px'}}
                       
                        alt={props.title}
                    />
                    <div className="Maintitle">
                        <p className='title text-white'>{props.title}</p>
                        <div className="text-center "><a href="" className='bg-black hvr-sweep-to-right text-white  py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black button'>View All</a> </div>
            
                    </div>
                </div>
               
            </div>
        </div>
        </>
    )
}

export default AllImgQueens
