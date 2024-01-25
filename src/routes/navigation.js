import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function MainNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigator;
