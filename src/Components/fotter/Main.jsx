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
        <>
            <div><hr className='mt-8 mb-16 ' /></div>
            <div className='flex flex-wrap ms-5 mr-3'>
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 md:mb-8'>
                    <SectionOne />
                </div>
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    <SectionTwo />
                </div>
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4'>
                    <SectionThree />
                </div>
                <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 '>
                    <SectionFour />
                </div>
            </div>
            <div className="ms-5">
                <FooterIcons/>
            </div>
            <div className=""><FooterDropDown/></div>
        </>
    )
}

export default Main
