import React, { useState, useEffect } from 'react';
import SideFilter from './SideFilters/SideFilter';
import ImgComp from './ImgComponent/ImgComp';

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
    <div style={{ display: 'flex' }}>
      {isSmallScreen ? null : <SideFilter style={{ display: 'block' }} />}
      <ImgComp />
    </div>
  );
};

export default CategoryItemMain;



// import React from 'react'
// import SideFilter from './SideFilters/SideFilter'
// import ImgComp from './ImgComponent/ImgComp'
// import './CategoryItemMain.css'

// const CategoryItemMain = () => {
//   return (
//     <div className='flex'>
//         <SideFilter className="sidefilter" />
//         <ImgComp/>
//     </div>
//   )
// }

// export default CategoryItemMain