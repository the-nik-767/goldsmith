import { IKImage } from 'imagekitio-react'
import React from 'react'
import '../style/responsive.css'
import { Card, CardBody } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const AllFrenchCrown = (props) => {

  let navigate = useNavigate()
  let dispatch = useDispatch()

  const navigateCategory = (e) => {
    if (props.id) {
      const id = (props.id);
      // console.log("id.......", id)
      navigate(`/category?id=${id}`);
    }
    else {
      navigate('/category');
    }

    window.scrollTo(0, 0);

  }
  return (
    <Card className=" my-1 main-crown-page"  >
      <CardBody
        className=" rounded overflow-hidden mt-5  p-3"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className=" img-hover-zoom--slowmo rounded">

          {props.cateimg && typeof props.cateimg === 'string' && (
            <IKImage
              src={JSON.parse(props.cateimg).url}
              style={{ width: "100%", height: "50vh" ,objectFit:'cover'}}
              className='img'
            />
          )}
          <div className="Maintitle">
            <p className="title  ">{props.catename}</p>
            <a
              onClick={navigateCategory}
              className="bg-black text-white py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black buttonQueens"
            >
              View All
            </a>
          </div>
        </div>
      </CardBody>
    </Card>
    // <Card className="flex justify-center  my-1 main-crown-page">
    //   <CardBody
    //     className=" rounded overflow-hidden mt-5 my-3 p-3"
    //     style={{
    //       maxWidth: "100%",
    //       maxHeight: "100%",
    //       width: "100%",
    //       height: "100%",
    //     }}
    //   >
    //     <div className=" img-hover-zoom--slowmo rounded">

    //       {props.cateimg && typeof props.cateimg === 'string' && (
    //         <IKImage
    //           src={JSON.parse(props.cateimg).url}
    //           style={{ width: "100%", height: "50vh" ,objectFit:'cover'}}
    //           className='img'
    //         />
    //       )}
    //       <div className="Maintitle">
    //         <p className="title  ">{props.catename}</p>
    //         <a
    //           onClick={navigateCategory}
    //           className="bg-black text-white py-2 px-8 hover:bg-transparent  hover:border-solid border-2 border-black hover:text-black buttonQueens"
    //         >
    //           View All
    //         </a>
    //       </div>
    //     </div>
    //   </CardBody>
    // </Card>
  );

}

export default AllFrenchCrown