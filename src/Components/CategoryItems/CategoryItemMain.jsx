import React, { useState, useEffect } from 'react';
import SideFilter from './SideFilters/SideFilter';
import ImgComp from './ImgComponent/ImgComp';
import "./CategoryItemMain.css"
import Topbar from './Topbar/Topbar';

const CategoryItemMain = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 950);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div>
        <Topbar />
      </div>
      <div className='flex justify-center	'>
        {isSmallScreen ? null : <SideFilter style={{ display: 'block' }} />}
        <ImgComp className="imgcomp" />
      </div>
    </>
  );
};

export default CategoryItemMain;

