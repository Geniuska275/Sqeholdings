import React from 'react'
import { FaCopy } from "react-icons/fa";
import Dropdowns from '../Dropdown';
import Download from '../Download';
import { FiDownload } from "react-icons/fi";
import HistogramChart from './Histogram';
import LineChart from './LineChart';

function Random() {
  return (
    <div className='bg-[#ffffff] col md:flex  gap-4 md:justify-around md:items-center'>

        <div className=''>
            <div className='relative w-[300px] h-[300px] bg-[#f0f0f0] rounded-lg shadow-md '>
              
                   <FaCopy className='text-[#141d38] text-2xl absolute top-3 right-3' />

               <h1 className=' top-[220px] rounded text-white  absolute w-[98%] p-4 bg-[#141d38] mt-4'>Time Signature:</h1>
            </div>
            <button className=' w-[260px] text-center rounded md:w-[260px] md:block bg-[#141d38] text-white px-4 py-2  font-[Poppins] font-bold my-3'>Generate Random Number</button>
        </div>
        
        <div className='flex flex-col gap-6 justify-center items-center'>
          <Dropdowns/>
          <input type="text" className=' mb-3 w-[150px] h-[40px] rounded-md border-2 border-[#141d38] px-4 py-2 mt-4' placeholder='Enter Size...' />
          <Download/>
          <button className='bg-[#141d38] gap-1 flex items-center text-white px-[40px] py-2 font-[Poppins] font-bold rounded'> 
            Download
            <FiDownload className='text-xl'/>
          </button>


        </div>
       <LineChart width={330} height={300} />
        <div className='w-[200px] leading-[20px] mb-4  h-[340px] gap-4 p-[20px] rounded bg-[#f0f0f0] flex flex-col'>
          <h1 className='text-2xl mt-8'>Qualitative Analysis:</h1>
          <h1 className='text-2xl'>Entropy:</h1>
          <h1 className='text-2xl'>Strd dev:</h1>
        </div>
    </div>
  )
}

export default Random