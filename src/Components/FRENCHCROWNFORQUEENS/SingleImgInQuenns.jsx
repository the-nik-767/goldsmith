import React from 'react'
import AllImgQueens from './AllImgQueens'
const SingleImgInQuenns = () => {
    let arr=[
        {Img:'https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYWNlbGV0fGVufDB8fDB8fHww','title':'NECK-CHAIN'},
        {Img:'https://images.unsplash.com/photo-1611653842967-39eb011b2ca3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8','title':'BRACELET'},
        {Img:'https://images.unsplash.com/photo-1625516152414-8f33eef3d660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D','title':'BRACELET'},
    ]
  return (
    <>
        <div className=" text-center text-5xl font-mono  "  ><h2>FRENCH CROWN FOR QUEENS</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3  justify-center mt-8" > 
                {
                    arr.map((x) => {
                        return(
                            <AllImgQueens Img={x.Img} title={x.title}/>
                        )
                        
                    })

                }
            </div>
    </>
  )
}

export default SingleImgInQuenns