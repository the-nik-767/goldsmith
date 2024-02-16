import React from 'react'
import Section2 from './Section2';
import '../Section1/section1.css';
import '../../CategoryItems/ImgComponent/style/ImgComp.css'

const Section2Main = () => {
    let arr = [
        {
            Img: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
            title: 'Long crystal earrings',
            price: "999",
            label:'SELLING FAST'
        },
        {
            Img: 'https://images.unsplash.com/photo-1528121238716-306799520ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
            title: 'Embossed hoop earrings',
            price: "999",
            label:'LIMED STOCK'
        },
        {
            Img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Flower crystal ring',
            price: "999",
            label:'SELLING FAST'
        },
        {
            Img: 'https://images.unsplash.com/photo-1459204195697-4de88edf3ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
            title: 'Neck chain',
            price: "999",
            label:'LIMED STOCK'
        },
    ];
    return (
        <>
            {/* <hr className='mt-5 mb-5 '/> */}
            <div className=" text-center text-xl uppercase font-mono mt-24 mb-10 relative   "><h1 className='underline'>BEST SELLING PRODUCTS</h1></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4 gap-8 justify-center mx-8">
                {
                    arr.map((x) => {
                        return (
                            <Section2 Img={x.Img} title={x.title} price={x.price} key={x.title} label={x.label}/>
                        )

                    })

                }
            </div>
            {/* <div className="text-center "><a href="" className='bg-black hvr-sweep-to-right text-white  py-2 px-8 hover:bg-white  hover:border-solid border-2 border-black hover:text-black'>View All</a> </div> */}
            {/* <hr className='mt-10 mb-10 '/> */}
        </>
    )
}

export default Section2Main