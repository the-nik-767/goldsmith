import React from 'react'

const AllImgInNewCollection = (props ) => {
  return (
    <div>
       <div className="flex justify-center mx-6 my-3 " >
                <div className=" rounded overflow-hidden mt-5 my-3 " style={{ width: '100%',   }}>
                    <div className="md:grid-cols-2">

                        <div
                            className=" object-cover  bg-no-repeat origin-center  hover-effect w-full h-full" 
                            style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover" ,height:'700px'   }}
                            alt={props.title}
                        />
                        <div className="" style={{position:'relative'}}>
                            <p className='' style={{ position: 'absolute',bottom: '200px',left: '10%',color: 'black',fontSize: '30px',fontWeight: 'bolder'}} >{props.title}</p>
                            <div className="text-center "><a href="" className='bg-black hvr-sweep-to-right text-white  py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black ' style={{position: 'absolute',bottom: '150px',left: '10%'}}>View All</a> </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>

  )
}

export default AllImgInNewCollection
