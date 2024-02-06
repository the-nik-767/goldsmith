import React from "react";
import { Dropdown } from "./Dropdown";
import { MdOutlineAccountCircle } from "react-icons/md";
import UserLogo from "../User/UserLogo";
import { useNavigate } from "react-router-dom/dist";
import './style/sidebar.css'
export const DrawerComponent = ({ isOpen, onClose }) => {
  let navigate = useNavigate()
  let x = [
    {
      id: "1",
      btntxt: "HOME",
      item: ["Item 1", "Item 2"]
    },
    {
      id: "2",
      btntxt: "SHOP",
      item: ["Item 1", "Item 2"]
    },
    {
      id: "3",
      btntxt: "PRODUCTS",
      item: ["Item 1", "Item 2"]
    },
    {
      id: "4",
      btntxt: "TEMPLATES",
      item: ["Item 1", "Item 2"]
    },
    {
      id: "5",
      btntxt: "PAGES",
      item: ["Item 1", "Item 2"]
    },
    {
      id: "6",
      btntxt: "MEGA",
      item: ["Item 1", "Item 2"]
    }
  ];
  const handleOnClickPrd = (pid) =>{
    console.log("id => ",pid);
    

  }

  return (
    <>
    <div
      id="drawer-navigation"
      className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? "shadow-lg" : ""
    } ${isOpen ? "" : "-translate-x-full"} bg-white w-64 dark:bg-gray-800`}
    tabIndex={-1}
      aria-labelledby="drawer-navigation-label"
    >
    <span className=" m-2    text-3node xl pe-5 ms-4 text-gray-400 bg-transparent  w-8 h-8 absolute   mb-10" onClick={()=>navigate('/user')}>
          <MdOutlineAccountCircle />
        </span>
      <button
        type="button"
        onClick={onClose}
        className="text-gray-400 bg-transparent text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center mb-10"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <br />
      <br />
      {
        x?.map((x, i) => {
          
          return (
            <Dropdown key={x.id} id={x.id} btntxt={x.btntxt} item={x.item} handleOnClick={handleOnClickPrd}/>
          )
        })
      }
      <div className="flex">
        <div class="contact_number">
          <p><a href="" bgcolor="black"><img src="//thefoomer.in/cdn/shop/t/47/assets/order-tracking_small.jpg?v=88311329181762376151706097645" alt="Tracking Icon" className="imgSideBar oneBox" /><span className="text-xs">Track Orders</span></a></p>
          <p><a href="" bgcolor="black"><img src="//thefoomer.in/cdn/shop/t/47/assets/whatsapp_small.jpg?v=98417115858127822171706097645" alt="Whatsapp Icon" className="imgSideBar twoBox" /><span className="text-xs">WhatsApp</span></a></p>
          <p><a href="" bgcolor="black"><img src="https://cdn.shopify.com/s/files/1/0687/6171/4968/files/email.png?v=1687943020" alt="Mail Icon" className="imgSideBar" /><span className="text-xs">Mail</span></a></p>
        </div>
      </div>
    </div>
      </>
  );
};

