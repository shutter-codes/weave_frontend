import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Filters from '../components/Quick_Therapy/Filters'
import QuickFacts from '../components/Quick_Therapy/quickFacts'
import QuickTherapyMain from '../components/Quick_Therapy/QuickTherapyMain'
import Cards from '../components/Quick_Therapy/Cards'


function QuickTherapy() {
  return (
   
   <>
    <Nav/>
    <Filters/>
    <Cards/>
    <QuickFacts/>
  
    {/* <Cards/> */}
   <Footer/>
   
   </>
  )
}

export default QuickTherapy