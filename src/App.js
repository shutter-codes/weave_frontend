import "./assets/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopicDescription from "./components/Quick_Therapy/TopicDescription";
import HomePage from "./pages/HomePage";
import QuickTherapy from "./pages/QuickTherapy";
function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/quickTherapy" element={<QuickTherapy/>}></Route>
        <Route path="/topics" element={<TopicDescription/>}></Route>
      </Routes>
    </BrowserRouter>



  // //  <HomePage/>
  // <QuickTherapy/>
  // // <TopicDescription/>
      )
    };
export default App;
