import React from "react";

export const ShopImg = () => {
  let arr = [
    {
      Img: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      title: "Long crystal earrings",
    },
    {
      Img: "https://images.unsplash.com/photo-1528121238716-306799520ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      title: "Embossed hoop earrings",
    },
    {
      Img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Flower crystal ring",
    },
    {
      Img: "https://images.unsplash.com/photo-1459204195697-4de88edf3ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      title: "Neck chain",
    },
  ];
  return (
    <div className=" px-5 mx-auto mt-16 flex-auto">
      <div className="flex  flex-col ">
        {arr.map((x, index) => (
          <img
            key={index}
            src={x.Img}
            alt={x.title}
            style={{ height: "90px", width: "90px", marginTop: "10px" }}
          />
        ))}
      </div>
    </div>
    // <div style={{position:"relative"}}>
    //     <div style={{top:"0"}}>
    //     {
    //                 arr.map((x) => {
    //                     return(
    //                         <img src={x.Img} alt="" style={{height:"90px",width:"90px" }}/>
    //                     )

    //                 })

    //             }
    //     </div>
    // </div>
  );
};
