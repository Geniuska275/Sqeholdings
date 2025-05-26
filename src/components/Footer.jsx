
import { ImLinkedin } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
function Footer() {
  return (
    <div className='bg-[#141d38] text-white md:p-[40px] mt-[]'>
        <div className="md:flex md:justify-between md:items-center ">
            <div className=" text-center p-[20px]">
                <h1 className="font-bold text-2xl font-[Poppins] mb-2">Company</h1>
                <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">company overview</h3>
                <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">meet the team</h3>
                <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Company news and press</h3>
                <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">company overview</h3>
                <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">commitment to sustainability</h3>

                <h1 className="font-bold text-2xl font-[Poppins] py-2">Connect with Us</h1>
                <div className="flex gap-4 items-center justify-center">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className=" flex items-center justify-center hover:transition duration-300 w-[40px] h-[40px] rounded-full bg-blue-500">
                        <ImLinkedin className='text-md ' />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className=" flex items-center justify-center hover:transition duration-300 w-[40px] h-[40px] rounded-full bg-red-500">
                        <FaYoutube className='text-md' />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className=" flex items-center justify-center hover:transition duration-300 w-[40px] h-[40px] rounded-full bg-blue-500">
                        <FaTwitter className='text-md hover:text-blue-400 transition duration-300' />
                    </a>
                 </div>
            </div>
            <div className=" text-center p-[20px] md:mb-[35px]">
                   <h1 className="font-bold text-2xl font-[Poppins] mb-2">Solutions</h1>
                   <h3 className="hover:text-blue-400 transition duration-300 font-bold">Industries & Applications</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold">Developer Marketplace</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold">Web Technologies</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold">SQid</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold">SQCode</h3>
                    <h3 className="hover:text-blue-400 transition duration-300 font-bold">SQE Mobile App</h3>
                    <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">QueCredit</h3>
            </div>
             <div className=" text-center p-[20px]  md:mb-[160px]">
                   <h1 className="font-bold text-2xl font-[Poppins] md:mb-2">Partners</h1>
                   <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">queVANTAGE partner Program</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Become a partner</h3>
                    
            </div>
             <div className=" text-center p-[20px] md:mb-[150px]">
                   <h1 className="font-bold text-2xl font-[Poppins] mb-2">Our Network</h1>
                   <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">SQE Platform</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Core Technologies</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Web3 Technologies</h3>
                    
            </div>
            <div className=" text-center p-[20px] md:mb-[110px]">
                   <h1 className="font-bold text-2xl font-[Poppins] mb-2">Resources</h1>

                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Learning Hub_old</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Developer Marketplace</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Pre-Register As a Developer</h3>
                     <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Terms of Service</h3>
                    <h3 className="hover:text-blue-400 transition duration-300 font-bold font-[Poppins] pointer">Privacy Policy</h3>
                    
            </div>
        </div>
        <div className='ml-4 flex justify-center items-center py-4 border-t border-gray-600'>   
          <div className="flex items-center">
          <FaRegCopyright /><span className='font-serif text-sm ml-2 hover:text-blue-400 transition duration-300 font-bold font-[Poppins]'>2025 SQE. All rights reserved.</span>
          </div>

        </div>
        
        
       </div>
  )
}

export default Footer