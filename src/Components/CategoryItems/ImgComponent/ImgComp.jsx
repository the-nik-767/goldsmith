import React from 'react'
import { ImgCompBack } from './ImgCompBack';
import '../../newArrival/img.css'

const ImgComp = () => {

    let arr = [
        { Img: 'https://media.istockphoto.com/id/1177579994/photo/antique-gold-necklace-with-peacock-design.webp?b=1&s=170667a&w=0&k=20&c=XLStH1x-Q9abS4BsKJN66JMVmiAGf3MNXcGlDNfNdZQ=', 'title': "Gold Neckles" },
        { Img: 'https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8', 'title': 'Diamond ring' },
        { Img: 'https://media.istockphoto.com/id/1212328095/photo/beautiful-designer-fancy-earrings-pair-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=WYlXJjQnfNMz2iT6FyNBIRsuVvsQKPyjKxaYK2bLQ8E=', 'title': 'gold earring' },
        { Img: 'https://media.istockphoto.com/id/1952758096/photo/gold-bracelet-isolated-on-black-background.jpg?s=2048x2048&w=is&k=20&c=CcvXBM1cBgIWPn6imtk2sO9Lij-3V_IUaF-m4wpidjk=', 'title': 'pearl bracelets' },
        { Img: 'https://media.istockphoto.com/id/164122683/photo/earring.jpg?s=612x612&w=0&k=20&c=ln4X3nBj66mk__olWgIwF0YtjFzefnDkxI10lR0vLUo=', 'title': 'Diamond flower earring' },
        { Img: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8', 'title': 'New Style Earrings' },
        { Img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8', 'title': 'Faceted crystal bracelet' },
        { Img: 'https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGp3ZWxsZXJ5fGVufDB8fDB8fHww', 'title': 'Flower crystal ring' },
        { Img: 'https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D', 'title': 'Rhinestone crystal earring' },
        { Img: 'https://media.istockphoto.com/id/535169055/photo/diamond-ring.jpg?s=612x612&w=0&k=20&c=MwYrXy_6Lx7GNHAYLSVkAoWhOoKU8I1NkKEEbVv8YhA=', 'title': 'rounded diamond ring' },
        { Img: 'https://media.istockphoto.com/id/163122066/photo/round-diamonds-necklace.jpg?s=612x612&w=0&k=20&c=WGZd7NPAX1FyYPrjjnIM-c8jinMHT-GAIF4BLMYjtD4=', 'title': 'diamond necklace' },
        { Img: 'https://media.istockphoto.com/id/1317564785/photo/paper-jewelry-pendant-gift-packaging-rigid-box.jpg?s=612x612&w=0&k=20&c=WXlowyQ7jxiGyeRkGi_XhxtedUyn6-gkTBui7OO8X_0=', 'title': 'heart shape pendal' },
        { Img: 'https://media.istockphoto.com/id/824750814/photo/fancy-golden-bangles-for-woman-fashion-jewelary-photography-macro-image.jpg?s=612x612&w=0&k=20&c=axrMQbhvBN4fMhwS-OYkAEI4W3lgPeF_svuhckLuiTM=', 'title': 'gold bangles' },
        { Img: 'https://media.istockphoto.com/id/528291740/photo/wedding-ring-with-diamond-3d-rendering.jpg?s=2048x2048&w=is&k=20&c=hl2-UHMlzgQ60AUah71rXTQeCG1EpGB2FUoEIek51qo=', 'title': 'diamond ring' }
    ];
    return (
        <div className=' mt-32 ' style={{ width: "85vw" }}>
            <div style={{ width: "97%" }} className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4 gap-3 justify-center'>
                {
                    arr.map((x) => {
                        return (
                            <ImgCompBack Img={x.Img} title={x.title} key={x.title} />
                        )

                    })
                }
            </div>
        </div>
    )
}

export default ImgComp