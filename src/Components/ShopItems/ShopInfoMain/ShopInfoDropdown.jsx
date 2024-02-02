import React, { useEffect, useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import { connect } from "react-redux";
import { addToCart } from "../../../Redux/Action/action";

const ShopInfoDropdown = ({ cartItems, addToCart }) => {
  const sizes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const types = ["rose gold", "yellow", "silver", "platinum"];

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedType, setselectedType] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleTypeChange = (type) => {
    setselectedType(type);  
  };

  useEffect(() => {
    console.log("Updated Cart State:", cartItems);
  }, [cartItems]);

  const handleAddToCart = () => {
    if (selectedSize && selectedType) {
      addToCart(selectedSize, selectedType);
    }
  };

  return (
    <>
      <div className="flex  flex-col gap-6 mb-5">
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

      <div className="flex flex-col gap-6 mb-5">
        <Select
          size="lg"
          label="Select Color"
          value={selectedType}
          onChange={handleTypeChange}
        >
          {types.map((type, index) => (
            <Option key={index} value={type}>
              {type}
            </Option>
          ))}
        </Select>
      </div>

      <Button className="capitalize mb-5" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, { addToCart })(ShopInfoDropdown);
