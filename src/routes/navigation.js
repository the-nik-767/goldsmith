import Home, { CarouselTransition, CarouselWithContent } from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function MainNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CarouselTransition />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigator;
