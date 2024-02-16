import React from 'react'
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineViewCompact } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import TopbarFilter from './TopbarFilter';
import '../CategoryItemMain.css'


const Topbar = ({setViewStyle}) => {
    

    const handleToggleView = (style) => {
        setViewStyle(style);
    };
    return (
        <>
            <div className="border border-black mt-32 flex justify-between py-3 cursor-pointer">
               
                <div className="grid grid-cols-3  text-2xl ms-5 grid-view-class">
                    <button className="collection-toolbar__button" onClick={() => handleToggleView('grid')} >
                        <MdOutlineGridView />
                    </button>
                    <button className="collection-toolbar__button" onClick={() => handleToggleView('singleRow')}>
                        <MdOutlineViewCompact />
                    </button>
                    <button className="collection-toolbar__button" onClick={() => handleToggleView('list')}>
                        <HiViewList />
                    </button>
                </div>
                <div>
                <span className='flex items-center me-5 hidden topbarfilter'><TopbarFilter /></span>
            </div>
            </div>

          
        </>

    )
}

export default Topbar