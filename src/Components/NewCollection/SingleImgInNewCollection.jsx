import React from 'react'
import AllImgInNewCollection from './AllImgInNewCollection'

const SingleImgInNewCollection = () => {
  
  let arr=[
    {Img:'https://images.unsplash.com/photo-1603298333647-ed142dbbc9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D','title':'NECK'},
    {Img:'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D','title':'LOCET'},
    {Img:'https://images.unsplash.com/photo-1583484370773-c1af4e528d5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D','title':'CHAIN BRACELET '},
    {Img:'https://images.unsplash.com/photo-1603298333647-ed142dbbc9d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D','title':'THINE CHAIN'},
    {Img:'https://images.unsplash.com/photo-1558882268-15aa056d885f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIwY29sbGVjdGlvbiUyMGluJTIwamV3ZWxyeXxlbnwwfHwwfHx8MA%3D%3D  ','title':'ANTIC CHAIN'},
    {Img:'https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5ldyUyMGNvbGxlY3Rpb24lMjBpbiUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D','title':'MULTIPLE CHAIN'},
    {Img:'https://images.unsplash.com/photo-1584811644165-33db3b146db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D','title':'ERRING'},
    {Img:'https://images.unsplash.com/photo-1564623788399-b75405a129a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8','title':'ERRING'},
    {Img:'https://plus.unsplash.com/premium_photo-1681276170423-2c60b95094b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D','title':'DIOMION JEWELLRY'},
    {Img:'https://plus.unsplash.com/premium_photo-1681276169830-7bd1678b0c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D','title':'EVERY THING'},
    {Img:'https://images.unsplash.com/photo-1573575154350-35e29dfd6cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5ldyUyMGNvbGxlY3Rpb24lMjBpbiUyMGpld2Vscnl8ZW58MHx8MHx8fDA%3D','title':'EVERY THING'},
    {Img:'https://plus.unsplash.com/premium_photo-1681276169450-4504a2442173?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8','title':'EVERY THING'},
]
return (
<div>
  <div className=" text-center text-5xl font-mono mt-5 header-font"  ><h2>NEW COLLECTION</h2></div>
    <div className="grid grid-cols-1 md:grid-cols-2  justify-center mt-8" > 
            {
                arr.map((x,i) => {
                    return(
                        <AllImgInNewCollection key={i} Img={x.Img} title={x.title}/>
                    )
                    
                })

            }
        </div>
</div>
  )
}

export default SingleImgInNewCollection
