import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

import './style/Section.css'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import FooterIcons from './FooterIcons'
import FooterDropDown from './FooterDropDown'

const Main = () => {
    return (
        <div>
            <div><hr className='mt-8 mb-8 ' /></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ms-5 mr-3'>
                <div className='w-full  md:mb-8 mt-4'>
                    <SectionOne />
                </div>
                <div className='w-full  mt-4'>
                    <SectionTwo />
                </div>
                <div className='w-full  mt-4'>
                    <SectionThree />
                </div>
                <div className='w-full  mt-4'>
                    <SectionFour />
                </div>
            </div>
            <div className="ms-5">
                <FooterIcons/>
            </div>
            <div className=""><FooterDropDown/></div>
        </div>
    )
}

export default Main
