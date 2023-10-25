import "./assets/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QuickTherapy from "./pages/QuickTherapy";
function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/quickTherapy" element={<QuickTherapy/>}></Route>
    
      </Routes>
    </BrowserRouter>



  // //  <HomePage/>
  // <QuickTherapy/>

      )
    };
export default App;
