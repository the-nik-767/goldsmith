import { IKImage } from 'imagekitio-react'
import React from 'react'

const AllFrenchCrown = (props) => {
    // console.log("Image URL:", JSON.parse(props.cateimg).url);

    return (
      <div className="flex justify-center mx-6 my-3 ">
        <div
          className=" rounded overflow-hidden mt-5 my-3 "
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="md:grid-cols-2 img-hover-zoom--slowmo">
            <div
              className="img object-cover bg-no-repeat origin-center  hover-effect icons "
              style={{
                backgroundImage: "url(" + props.cateimg + ")",
                backgroundSize: "cover",
                height: "70vh",
                width: "100%",
              }}
              alt={props.title}
            />
            {/* <IKImage
                        path={JSON.parse(props.cateimg).url}
                        transformation={[{
                            "height": "200",
                            "width": "200"
                        }]}
                        loading="lazy"
                        lqip={{ active: true }}
                    /> */}
            {/* {console.log(JSON.parse(props.cateimg).url)} */}
            <div className="Maintitle">
              <p className="title text-white ">{props.catename}</p>
              <a
                href=""
                className="bg-black  text-white  py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black buttonQueens"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AllFrenchCrown


// import React from 'react'
// import { IKContext, IKImage } from 'imagekitio-react';

// const AllFrenchCrown = (props) => {
//     // Check if props.cateimg is defined before trying to parse it
//     // const imageUrl = props.cateimg ? JSON.parse(props.cateimg).url : '';

//     return (
//         <div className="flex justify-center mx-6 my-3 " >
//             <div className=" rounded overflow-hidden mt-5 my-3 " style={{ maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%' }}>
//                 <div className="md:grid-cols-2 img-hover-zoom--slowmo">

//                     {/* Use IKImage component with imageUrl */}
//                     {/* <IKContext urlEndpoint="https://ik.imagekit.io/saufrbirqu" publicKey="public_SWufzC3NBuBYZKszPsXhFdh1XDo=" authenticationEndpoint="http://www.yourserver.com/auth"> */}
//                         <IKImage
//                             path={JSON.parse(props.cateimg).url}
//                             transformation={[{
//                                 "height": "200",
//                                 "width": "200"
//                             }]}
//                             loading="lazy"
//                             lqip={{ active: true }}
//                         />
//                     {/* </IKContext> */}

//                     <div className="Maintitle">
//                         <p className='title text-white '>{props.title}</p>
//                         <a href="" className='bg-black  text-white  py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black buttonQueens'>
//                             View All
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AllFrenchCrown;
