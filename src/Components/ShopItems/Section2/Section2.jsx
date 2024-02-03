import React from 'react'

const Section2 = (props) => {
  return (
    <>
    <div className="flex justify-center ">
      <div
        className=" rounded overflow-hidden mt-5 my-3 "
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          height: "100",
          width: "100%",
        }}
      >
        <div className="md:grid-cols-2">
          <div className="img-hover-zoom--slowmo">
          <div
            className="img object-cover bg-no-repeat origin-center icons  bg-center "
            style={{
              backgroundImage: "url(" + props.Img + ")",
              backgroundSize: "cover",
              height: "50vh",
              width: "100%",
            }}
            alt={props.title}
          /></div>
          <div className="px-6 py-4">
            <div className=" text-base mb-2 text-center text-black">
              {props.title}
            </div>
          </div>
          <div className="px-6 ">
            <div className=" text-base mb-2 text-center text-black">
              {props.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Section2