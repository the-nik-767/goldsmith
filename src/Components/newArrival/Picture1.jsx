import React from 'react'
import AllItem from './AllItem';
import './img.css'

const Picture1 = () => {
   
        let arr = [
            {Img: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D','title': 'Long crystal earrings'},
            {Img: 'https://images.unsplash.com/photo-1528121238716-306799520ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D','title': 'Embossed hoop earrings'},
            {Img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','title': 'Flower crystal ring'},
            {Img: 'https://images.unsplash.com/photo-1459204195697-4de88edf3ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8','title': 'Neck chain'},
            {Img: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8','title': 'New Style Earrings'},
            {Img: 'https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8','title': 'Old Style Ring'},
            {Img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8','title': 'Faceted crystal bracelet'},
            {Img: 'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D','title': 'Rhinestone crystal earring'},
        ];
    
    return (
        <>
        <hr className='mt-5 mb-5 '/>
            <div className=" text-center text-5xl font-mono "><h2>NEW ARRIVAL DESIGN</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-clos-4 xl:grid:clos-4 gap-3 justify-center"> 
                {
                    arr.map((x) => {
                        return(
                            <AllItem Img={x.Img} title={x.title}  key={x.title}/>
                        )
                        
                    })

                }
            </div>
            <div className="text-center "><a href="" className='bg-black hvr-sweep-to-right text-white  py-2 px-8 hover:bg-white  hover:border-solid border-2 border-black hover:text-black'>View All</a> </div>
            <hr className='mt-10 mb-10 '/>
        </>
    )
}

export default Picture1
