import React from 'react'
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineViewCompact } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import TopbarFilter from './TopbarFilter';
import '../CategoryItemMain.css'


const Topbar = () => {
    return (
        <div className='border border-black mt-32 flex justify-between py-3	cursor-pointer	'>
            <div className='flex items-center text-2xl ms-5'>
                <span className='me-2'><MdOutlineGridView /></span>
                <span className='me-2'><MdOutlineViewCompact /></span>
                <span><HiViewList /></span>
            </div>
            <div>
                <span className='flex items-center me-5 hidden topbarfilter'><TopbarFilter /></span>
            </div>
        </div>
    )
}

export default Topbar