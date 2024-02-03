import React from 'react'
import './style/newCollection.css'

const AllImgInNewCollection = (props) => {
    return (
      

        <div className="flex justify-center mx-6 my-3 " >
        <div className=" rounded overflow-hidden mt-5 my-3 " style={{maxWidth:'100%', maxHeight:'100%' ,width:'100%' , height:'100%'}}>
            <div className="md:grid-cols-2 img-hover-zoom--slowmo">

                <div
                    className="img object-cover bg-no-repeat origin-center  hover-effect icons " 
                    style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover" ,height:'70vh'  ,width:'100%'}}
                   
                    alt={props.title}
                />
                <div className="MaintitleQueens">
                    <p className='titleQueens text-white'>{props.title}</p>
                    <a href="" className='bg-black  text-white  py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black buttonQueens'>View All</a> </div>
        
              
            </div>
           
        </div>
    </div>

    )
}

export default AllImgInNewCollection
