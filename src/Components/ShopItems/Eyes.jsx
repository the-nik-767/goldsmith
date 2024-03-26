import {
  Option, Select, Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from '@material-tailwind/react';
import { Box, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { useLocation } from 'react-router-dom';
import { openAddToCard } from '../../Redux/Action/action';
import './ShopInfoMain/style/eyes.css'
import { getApidataOnePrdData } from '../../Redux/Action/productAction';
import { addToCartHandler, calculateDiscountedPrice } from '../../utils';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const accordionItems = [
  {
    id: 1,
    question: "story",
    answer:
      "Infuse playful sophistication into your wardrobe with the Bright White and Black Polka Dotted Subtle Sheen Super Soft Premium Cotton Shirt. The classic polka dot pattern in bright white base adds a touch of classic charm. Crafted from premium cotton with a subtle sheen and super-soft feel, this shirt seamlessly combines luxury and comfort. Make a stylish statement with this uniquely designed piece, perfect for adding a dash of personality to your ensemble.",
  },
  {
    id: 2,
    question: "description",
    answer:
      "Safer For The Environment: Our denim factory partner recycles 98% of their water using reverse osmosis filtration and keeps byproducts out of the environment by mixing them with concrete to create building materials.",
  },
  {
    id: 3,
    question: "customization",
    answer:
      "Customization is possible in this item. Go through following instructions for customisation",
  },
  {
    id: 4,
    question: "delivery time",
    answer: (
      <div>
        Delivery available in all Pincodes.
        <br />
        Delivery Time
        <br />3 to 7 working Days.
      </div>
    ),
  },
  {
    id: 5,
    question: "return policy",
    answer: (
      <div>
        Free returns within 14 days
        <br />
        No Questions Asked
        <br />
        We gladly accept returns as it is a fantastic opportunity for us to show
        you our honesty and transparency. We will also get your feedback to
        improve our products and services. We encourage you to return because
        your satisfaction and comfort is our utmost priority. We don’t want our
        customers to get even slightly dissatisfied, hence we advise you to go
        ahead and ask for refund/exchange.
        <br />
        Refund
        <br />
        Exchange
      </div>
    ),
  },
  {
    id: 6,
    question: "cash on delivery terms",
    answer:
      "Customization is possible in this item. Go through following instructions for customisation",
  },
  {
    id: 7,
    question: "company details",
    answer:
      "Customization is possible in this item. Go through following instructions for customisation",
  },
];

function Eyes({ itemId }) {
  const [leftImages, setLeftImages] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(0);

  const data = useSelector(state => state.oneproduct.data);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allPrdData = useSelector(state => state.product.data);
  const openAddToCart = useSelector((state) => state.cart.openAddToCart);


  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramId = searchParams.get("id");
  const productId = paramId || itemId;

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     setLeftImages(data.slice(0, 4));
  //   }
  // }, [data]);

  const handleCarouselChange = (index) => {
    setLeftImages(data.slice(index, index + 4));
  };

  const [state, setState] = useState({
    right: false,
  });
  useEffect(() => {
    // // setLoading(true)
    if (productId) {
      dispatch(getApidataOnePrdData(productId));
    }
    // // setLoading(false)
  }, [])
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
    addToCartHandler(productId, quantity, allPrdData, cartItems, dispatch, openAddToCard);
  }
  const DiscountedPrice = (price, discountLabel) => {
    return calculateDiscountedPrice(price, discountLabel);
  };

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="flex justify-center">
      <div className=" eyes-shop1 " style={{ direction: 'row' }}>
        <div className="eyes-image-info">
          <div className="eyes-shopslider-container">
            <Carousel
              className="eyes-shopslider"
              onChange={handleCarouselChange}
              showArrows={true}
            >
              {data &&
                data.map((x, index) =>
                  x.prdimg &&
                  JSON.parse(x.prdimg).map((image, i) => (
                    <img
                      key={`${index}-${i}`}
                      src={image.url}
                      alt={x.title}
                      style={{ width: "100%", height: "100%" }}
                    />
                  ))
                )}
            </Carousel>
            <div className="left-images">
              {leftImages.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.title}
                  style={{ width: "100%", height: "100%" }}
                />
              ))}
            </div>
          </div>
          <div className="eyes-infomain">
            <div>
              <div>
                {data && data.map((x, i) => (
                  <div key={i}>
                    <div>
                      <p className="mb-2 mt-2 text-slate-500 title-in-shoppage">{x.prdname}</p>
                      <p className="mb-3 text-slate-500">   € {DiscountedPrice(x.prdprice, x.discountlable) }</p>
                    </div>
                    <div className="flex mb-3 justify-center align-center rating">
                      <div>
                        <Rating value={4} readOnly />
                      </div>
                      <p className=" ms-2 text-md text-slate-500">reviews</p>
                    </div>
                  </div>
                ))}
              </div>
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
                <Button className="capitalize mb-5 eyes-addtocardbtn" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="eyes-shopaccoding">
              {accordionItems.map((item) => (
                <Accordion
                  key={item.id}
                  open={open === item.id}
                  icon={<Icon id={item.id} open={open} />}
                >
                  <AccordionHeader
                    className="text-sm text-black capitalize hover:bg-slate-300 transition-colors"
                    onClick={() => handleOpen(item.id)}
                  >
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody>{item.answer}</AccordionBody>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Eyes
