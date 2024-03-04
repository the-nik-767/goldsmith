import React from 'react';
import SideFilter from './SideFilters/SideFilter';
import ImgComp from './ImgComponent/ImgComp';
import "./CategoryItemMain.css"
import Topbar from './Topbar/Topbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryItemMain = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [viewStyle, setViewStyle] = useState('grid');
  const { id } = useParams();

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

    <div>
      <div>
        <Topbar setViewStyle={setViewStyle} />
      </div>
      <div className="flex">
        {isSmallScreen ? null : <SideFilter style={{ display: "block" }} />}
        <ImgComp className="imgcomp" viewStyle={viewStyle} />
      </div>
    </div>

  );
};

export default CategoryItemMain;