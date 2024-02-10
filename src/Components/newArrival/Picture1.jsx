import React from 'react'
import AllItem from './AllItem';
import './style/img.css'
import { useNavigate } from 'react-router-dom';

const Picture1 = () => {

    let navigate = useNavigate()
    const navigateCategory = () => {
        navigate('/category')
    }

    let arr = [
        { Img: 'https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D', 'title': 'Long crystal earrings', 'price': '45,645/-','label':'SELLING FAST' },
        { Img: 'https://images.unsplash.com/photo-1528121238716-306799520ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', 'title': 'Embossed hoop earrings', 'price': '999/-','label':'SELLING FAST' },
        { Img: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'title': 'Flower crystal ring', 'price': '2499/-' ,'label':'SELLING FAST'},
        { Img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8', 'title': 'Ring', 'price': '5000/-' ,'label':'SELLING FAST'},
        { Img: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', 'title': 'New Style Earrings', 'price': '2999/-','label':'SELLING FAST' },
        { Img: 'https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8', 'title': 'Old Style Ring', 'price': '9999/-' ,'label':'SELLING FAST'},
        { Img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8', 'title': 'Faceted crystal bracelet', 'price': '8026/-','label':'SELLING FAST' },
        { Img: 'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', 'title': 'Rhinestone crystal earring', 'price': '3699' ,'label':'SELLING FAST'},
    ];

    return (
        <>
            <hr className='mt-5 mb-5 ' />
            <div className=" text-center text-5xl font-mono mt-14 mb-10 header-font " ><h2 className='text-font header-color'>NEW ARRIVAL DESIGN</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid:cols-4 gap-8 justify-center" style={{ margin: '0px 20px' }}>
                {
                    arr.map((x) => {
                        return (
                            <AllItem Img={x.Img} title={x.title} key={x.title} price={x.price} label={x.label} />
                        )

                    })

                }
            </div>
            <div class="outer flex justify-center">
                <div class="button1 mt-10 ">
                    {/* <div class="text">button</div> */}
                    <button
                        class="rounded p-2 text-center text " style={{width:'150px'}}
                        type="button"
                        onClick={navigateCategory}
                    >
                       View All 
                    </button>
                </div>
            </div>
            {/* <div className="text-center mt-12 "><a href="" onClick={navigateCategory} className='bg-black hvr-sweep-to-right   text-white  py-2 px-8 hover:bg-white  hover:border-solid border-2 border-black hover:text-black'>View All</a> </div> */}
            <hr className='mt-8 mb-10 ' />
        </>
    )
}

export default Picture1
