import React from 'react'
import AllFrenchCrown from './AllFrenchCrown'
import'./style/frenchcroen.css'

const SingleImg = () => {

    let arr = [
        {Img: 'https://images.unsplash.com/photo-1567601617142-366d870579a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBqZXdlbHJ5fGVufDB8fDB8fHww','title':'RING'},
        {Img: 'https://plus.unsplash.com/premium_photo-1673285096761-79e49ff5b760?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D','title':'SILVER CHAIN'},
        {Img: 'https://images.unsplash.com/photo-1613498510372-8901cad084a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D','title':'GOLD CHAIN'},
        {Img: 'https://images.unsplash.com/photo-1504650777861-79c63a32f607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8','title':'BRACELET'},
        {Img: 'https://images.unsplash.com/photo-1628785517892-dbcd2f2719ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D','title':'BRACELET'},
        {Img: 'https://images.unsplash.com/photo-1575863062446-e5f64b4880b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D','title':'NET-LACE'},
        {Img: 'https://images.unsplash.com/photo-1613498510372-8901cad084a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D','title':'CHAIN'},
        {Img: 'https://images.unsplash.com/photo-1554301840-913d3250f757?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBqZXdlbHJ5fGVufDB8fDB8fHww','title':'WATCH'},
        {Img: 'https://images.unsplash.com/photo-1567601617142-366d870579a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBqZXdlbHJ5fGVufDB8fDB8fHww','title':'RING'},
    ];

  return (
    <>
       <div className=" text-center text-5xl font-mono mt-10 " ><h2>FRENCH CROWN FOR KINGS</h2></div>
       <div className="grid grid-cols-1 md:grid-cols-3  justify-center mt-8" > 
                {
                    arr.map((x,i) => {
                        return(
                            <AllFrenchCrown key={i} Img={x.Img} title={x.title}/>
                        )
                    })
                }
            </div>
    </>
  )
}



export default SingleImg