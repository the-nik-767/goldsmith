import React, { useEffect, useState } from "react";
import { Button, Select, Option } from "@material-tailwind/react";
import { addToCart, openAddToCard, updateCartItems } from "../../../Redux/Action/action";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import products from "../../../product.json";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { addToCartHandler } from "../../../utils";
// import { addToCartHandler } from "../../commantFunction/addToCartHandler";


const ShopInfoDropdown = ({ props }) => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          ((event.key === 'Tab' ||
            event.key === 'Shift'))
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const allPrdData = useSelector(state => state.product.data);
  const openAddToCart = useSelector((state) => state.cart.openAddToCart);

  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const sizes = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  const handleAddToCart = () => {
    
    // let img = allPrdData.find((x) => x.id == id);
    // const itemToAdd = {
      //   size: img.selectedSize,
      //   prdimg: img.prdimg,
      //   prdname: img.prdname,
      //   quantity:quantity,
      //   prdprice: img.prdprice,
      //   // tax:tax,  
      
      // };
      // SetOpenAddToCart(true)
      // toggleDrawer('right', true)
      // dispatch(addToCart(itemToAdd)); 
      
    // if (id) {
    //   let img = allPrdData.find((x) => x.id === +id);
    //   if (img) {

    //     const existingItem = cartItems.find((item) => item.id === id);
    //     if (existingItem) {

    //       existingItem.quantity++;
    //       dispatch(updateCartItems(existingItem, cartItems));
    //       dispatch(openAddToCard(true))
    //     } else {

    //       const itemToAdd = {
    //         id: id,
    //         prdimg: img.prdimg,
    //         prdname: img.prdname,
    //         quantity: quantity,
    //         prdprice: img.prdprice,
    //       };
    //       // SetOpenAddToCart(true);
    //       dispatch(addToCart(itemToAdd));
    //       dispatch(openAddToCard(true))
    //     }
    //   } else {
    //     console.error(`Product with ID  not found.`);
    //   }
    // } else {
    //   console.error("No product ID found in the URL.");
    // }
    addToCartHandler(id, quantity, allPrdData, cartItems, dispatch, openAddToCard);
  };
  
  

  return (
    <div>
      <div className="flex flex-col gap-6 mb-5">
        {/* <Select
          size="lg"
          label="Select Size"
          value={selectedSize ? selectedSize.toString() : ""}
          onChange={handleSizeChange}
        >
          {sizes.map((size, index) => (
            <Option key={index} value={size.toString()}>
              {size}
            </Option>
          ))}
        </Select> */}
      </div>
      <Button className="capitalize mb-5 addtocardbtn" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};


export default ShopInfoDropdown;
