import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { FaCaretRight } from "react-icons/fa6";
import image from "./logo.png"
function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [about,setAbout]=React.useState(false)
    const [solution,setSolution]=React.useState(false)
    const [network,setNetwork ]=React.useState(false)
    const [partner,setPartner ]=React.useState(false)
    const [learn,setLearn ]=React.useState(false)




  return (
    <nav className='shadow sticky top-0 bg-white z-50'>
        {/* container */}
        <div className='mx-auto py-4 flex justify-between items-center'>
            {/* brand */}
            <div className='flex items-center gap-2'>
            <a href=''>
                <img src={image} className='w-[150px]'/>
            </a>
            {/* toggle button */}
            <button onClick={() => setIsOpen(!isOpen)} className=' shadow w-[40px] h-[40px] flex justify-center items-center rounded-sm bg-[#1b87fb] md:hidden'>
             {isOpen ? <IoMdClose className='text-2xl text-white' /> :  <RxHamburgerMenu className='text-2xl text-white' />}
            </button>
            </div>
            {/* menu */}
            <div className='flex gap-6 ml hidden md:flex'>
                <div onClick={()=>setAbout(!about)} className=' relative flex items-center gap-1 hover:text-blue-400 transition duration-300'>
                    <h3 className='text-[#0f1940] font-bold font-[Poppins] '>About Us</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                  {about && <div className=' shadow top-[60px] left-[310px] w-[120px] h-[190px] absolute bg-white'>
                    <h2 className='p-2 text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Company<br></br>
                        Overview
                    </h2>
                     <h2  className='p-2 text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                    Meet the <br></br>
                        Team
                    </h2>
                     <h2  className='p-2 text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Company News and<br></br>
                        Press
                    </h2>

                  </div>}

                  <div className='flex items-center gap-1' onClick={()=>setSolution(!solution)}>
                    <h3 className='text-[#0f1940] font-bold font-[Poppins]'>Solutions</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                 {solution && <div className=' shadow top-[60px] left-[430px] w-[120px] h-[220px] absolute bg-white'>
                    <h2 className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Industries &<br></br>
                        Applications
                    </h2>
                     <h2  className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                     Developer MarketPlace <br></br>
                        Team
                    </h2>
                     <h2  className='py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Company News<br></br> and<br></br>
                        Press
                    </h2>

                  </div>}

                  <div className='flex items-center gap-1' onClick={()=>setNetwork(!network)} >
                    <h3 className='text-[#0f1940] font-bold font-[Poppins]'>Network</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                {network && <div  className=' shadow top-[60px] left-[530px] w-[120px] h-[200px] absolute bg-white'>
                    <h2 className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        SQE platform
                    </h2>
                     <h2  className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Core <br></br>
                        Technologies
                    </h2>
                     <h2  className='py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        QueCredit
                    </h2>
                     <h2  className='py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Sustainability
                    </h2>

                  </div>}

                  <div className='flex items-center gap-1 hover:text-blue-300 ' onClick={()=>setPartner(!partner)}>
                    <h3 className='text-[#0f1940] font-bold font-[Poppins]'>Partner</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                  {partner && <div  className=' shadow top-[60px] left-[630px] w-[120px] h-[170px] absolute bg-white'>
                    <h2 className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        queVANTAGE <br></br>
                        Partner Program
                    </h2>
                     <h2  className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                    Partner <br></br>
                        Application
                    </h2>
                     <h2  className='py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                       Partner Login
                    </h2>
            
                  </div>}
                  <div className='flex items-center gap-1' onClick={()=>setLearn(!learn)}>
                    <h3 className='text-[#0f1940] font-bold font-[Poppins]'>Learn</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div> 
                 {learn && <div  className=' shadow top-[60px] left-[760px] w-[120px] h-[100px] absolute bg-white'>
                    <h2 className=' py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        Learning Hub 
                        Partner Program
                    </h2>
                    <div className='px-3 flex gap-2 py-3 text-center text-sm hover:bg-[#3f444c] hover:text-white font-[Poppins]'>
                        <h2>FAQ's</h2>
                        <FaCaretRight />

                    </div>
            
                  </div>}           
                    <h3 className='text-[#0f1940] font-bold font-[Poppins]'>Contact Us</h3>     
            </div>
            <div className='flex items-center gap-4 md:gap-6 md:mr-[40px]'>
            <LuSearch className='text-3xl text-gray-500 mx-[20px]'/>
            <button className=' mr-[40px] rounded md:w-[150px] md:block bg-[#1b87fb] text-white px-4 py-2  font-[Poppins] font-bold'>Partner Login</button>
            </div>
        </div>

         {isOpen && <div className='flex flex-col gap-6 md:hidden '>
                <div className='flex items-center gap-1 py-2  hover:text-white hover:bg-[#3f444C] transition duration-300'>
                    <h3 className='ml-2 text-[#0f1940] font-bold font-[Poppins] hover:text-white '>About Us</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                  


                  <div className='flex items-center gap-1 py-2  hover:text-white hover:bg-[#3f444C] transition duration-300'>
                    <h3 className='ml-2 text-[#0f1940] font-bold font-[Poppins]'>Solutions</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                  <div className='flex items-center gap-1 py-2  hover:text-white hover:bg-[#3f444C] transition duration-300'>
                    <h3 className=' ml-2 text-[#0f1940] font-bold font-[Poppins]'>Partner</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                  <div className='flex items-center gap-1 py-2  hover:text-white hover:bg-[#3f444C] transition duration-300'>
                    <h3 className=' ml-2 text-[#0f1940] font-bold font-[Poppins]'>Network</h3>
                    <FaCaretDown className=' ml-2 text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                  <div className='flex items-center gap-1 py-2  hover:text-white hover:bg-[#3f444C] transition duration-300'>
                    <h3 className=' ml-2 text-[#0f1940] font-bold font-[Poppins]'>Learn</h3>
                    <FaCaretDown className='text-[#0f1940] font-bold font-[Poppins]'/>
                </div>
                
                    <h3 className=' ml-2 text-[#0f1940] font-bold font-[Poppins] py-2  hover:text-white hover:bg-[#3f444C] transition duration-300'>Contact Us</h3>
            
                
            </div>}



    </nav>
  )
}

export default Navbar