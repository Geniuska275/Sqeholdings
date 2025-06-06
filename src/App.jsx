import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Random from "./components/Random";
import Top from "./components/Top";

function App() {
 

  return (
    <div className="bg-[#ffffff] min-h-screen ">
    <Navbar/>
     <Dashboard/>
 
    <Top/>
    <Footer/>
    
    

    </div>
  )
}

export default App
