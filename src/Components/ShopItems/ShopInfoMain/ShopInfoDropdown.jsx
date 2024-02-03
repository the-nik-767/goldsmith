import React, { useEffect, useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import { connect } from "react-redux";
import { addToCart } from "../../../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import products from '../../../product.json'

const ShopInfoDropdown = ({ cartItems, addToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const myParam = searchParams.get('id');
  console.log("myParam", myParam)

  const sizes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    console.log("Updated Cart State:", cartItems);
  }, [cartItems]);

  const handleAddToCart = () => {
    let img = products.find((x) => x.id == myParam);
    
      addToCart(selectedSize, img.Img, img.title, img.price * quantity, quantity);
    
  };

  const navigator = useNavigate();
  

  return (
    <>
      <div className="flex flex-col gap-6 mb-5">
        <Select
          size="lg"
          label="Select Size"
          value={selectedSize}
          onChange={handleSizeChange}
        >
          {sizes.map((size, index) => (
            <Option key={index} value={size}>
              {size}
            </Option>
          ))}
        </Select>
      </div>

      <div className="flex items-center gap-4 mb-5">
        <Button onClick={handleQuantityDecrease}>-</Button>
        <div className="font-bold">{quantity}</div>
        <Button onClick={handleQuantityIncrease}>+</Button>
      </div>

      <Button className="capitalize mb-5" onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <Button className="capitalize mb-5 ms-5" onClick={() =>navigator('/buyNow')} >Buy Now</Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { addToCart })(ShopInfoDropdown);






















// import React, { useEffect, useState } from "react";
// import { Button, Select, Option } from "@material-tailwind/react";
// import { connect } from "react-redux";
// import { addToCart } from "../../../Redux/Action/action";
// import { useSearchParams } from 'react-router-dom';
// import products from '../../../product.json'

// const ShopInfoDropdown = ({ cartItems, addToCart }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const myParam = searchParams.get('id');
//   console.log("myParam", myParam)


//   const sizes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
//   // const types = ["rose gold", "yellow", "silver", "platinum"];

//   const [selectedSize, setSelectedSize] = useState(null);
//   // const [selectedType, setselectedType] = useState(null);

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   // const handleTypeChange = (type) => {
//   //   setselectedType(type);
//   // };

//   useEffect(() => {
//     console.log("Updated Cart State:", cartItems);
//   }, [cartItems]);

//   const handleAddToCart = () => {
//     let img = products.find((x) => x.id == myParam)
//     if (selectedSize) {
//       addToCart(selectedSize,  img.Img, img.title,img.price);
//     }

//   };
//   return (
//     <>
//       <div className="flex  flex-col gap-6 mb-5">
//         <Select
//           size="lg"
//           label="Select Size"
//           value={selectedSize}
//           onChange={handleSizeChange}
//         >
//           {sizes.map((size, index) => (
//             <Option key={index} value={size}>
//               {size}
//             </Option>
//           ))}
//         </Select>
//       </div>

//       {/* <div className="flex flex-col gap-6 mb-5">
//         <Select
//           size="lg"
//           label="Select Color"
//           value={selectedType}
//           onChange={handleTypeChange}
//         >
//           {types.map((type, index) => (
//             <Option key={index} value={type}>
//               {type}
//             </Option>
//           ))}
//         </Select>
//       </div> */}

//       <Button className="capitalize mb-5" onClick={handleAddToCart}>
//         Add to Cart
//       </Button>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   cartItems: state.cart.cartItems,
// });

// export default connect(mapStateToProps, { addToCart })(ShopInfoDropdown);
