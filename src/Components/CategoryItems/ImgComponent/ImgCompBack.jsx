import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ImgCompBack = (props) => {
    const navigate = useNavigate()
    const navigateShop = () => {
        navigate("/shop");
    }
    return (
        <>
            <div className="flex justify-center " >
                <div className="overflow-hidden mt-5 my-3 " style={{ maxWidth: '100%', maxHeight: '100%', height: '100%', width: '100%' }}>
                    <div className="md:grid-cols-2">
                        <div className="img-hover-zoom--slowmo">
                        <div
                            onClick={navigateShop}
                            className="img object-cover bg-no-repeat origin-center icons "
                            style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover", height: '40vh', width: '100%' }}

                            alt={props.title}
                        /></div>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center text-black capitalize">
                                {props.title}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
