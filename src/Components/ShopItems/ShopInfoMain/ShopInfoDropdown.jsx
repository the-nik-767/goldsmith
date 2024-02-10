import React, { useEffect, useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import { addToCart } from "../../../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import products from "../../../product.json";
import { useDispatch, useSelector } from "react-redux";

const ShopInfoDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [searchParams, setSearchParams] = useSearchParams();
  const myParam = searchParams.get("id");

  console.log("myParam", myParam);
  const sizes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  
  // useEffect(() => {
  //   console.log("Updated Cart State:", cartItems);
  // }, [cartItems]);

  const handleAddToCart = () => {
    let img = products.find((x) => x.id == myParam);
    const itemToAdd = {
      size: selectedSize,
      Img: img.Img,
      title: img.title,
      quantity:quantity,
      price: img.price,
      // tax:tax,  
      
    };
    dispatch(addToCart(itemToAdd));
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
      <Button className="capitalize mb-5" onClick={handleAddToCart}>
        Add to Cart
      </Button>
      <Button
        className="capitalize mb-5 ms-5"
        onClick={() => navigator("/buyNow")}
      >
        Buy Now
      </Button>
    </>
  );
};


export default ShopInfoDropdown;
