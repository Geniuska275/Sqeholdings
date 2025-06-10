
import QualitativeAnalysis from "./qualitative-analysis"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

import EntropyExplainer from "./entropy-explainer.jsx"
import { Button } from "../components/ui/button"
import GenerateRandom from "./Generate-Random.jsx"
import { Cards } from "./ui/cards.jsx"
import { useState } from "react"
import HistogramChart from "./Histogram.jsx"
import Dropdowns from "../Dropdown.jsx"
import Source from "../Source.jsx"
import Size from "../Size.jsx"
import { FiDownload } from "react-icons/fi"

export default function Dashboard() {
  const [entropyValue,setEntropy]=useState(1.93)
 const   histogram = [
          { bin: "Jan",  frequency: 42 },
          { bin: "Jan",  frequency: 28 },
          { bin: "Feb",  frequency: 48 },
          { bin: "Feb",  frequency: 32 },
          { bin: "Mar",  frequency: 55 },
          { bin: "Mar",  frequency: 35 },
        ]
 

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap justify-evenly items-center ">
       <div>
        <h1 className="text-xl text-center font-bold">RANDOM DATA</h1>
        <div className=" w-[300px] md:w-[400px] h-[340px] border shadow-md overflow-auto">
          12,34,5,6,74,4,300,4,8,3,3,993,83,30,4,80,3,95,3,3,40,39,38,30,20,
          12,34,5,6,74,4,300,4,8,3,3,993,83,30,4,80,3,95,3,3,40,39,38,30,20
          12,34,5,6,74,4,300,4,8,3,3,993,83,30,4,80,3,95,3,3,40,39,38,30,20

        </div>
        <button className='bg-[#141d38] my-3 w-[200px] md:w-[320px] text-center text-white px-[40px] py-2 font-[Poppins] font-bold rounded '> 
                      GENERATE
                      
                    </button>
                 <button className='bg-[#141d38] w-[200px] md:w-[320px] gap-1 flex items-center text-center  text-white px-[40px] py-2 font-[Poppins] font-bold rounded'> 

                      <span className="md:ml-[100px]">DOWNLOAD</span>
                      <FiDownload className='text-xl'/>
                    </button>          
        
        

       

       </div>
       <div className=" flex p-2 flex-col gap-[40px] border w-[200px] h-[400px] rounded-md shadow-md border">
          <Dropdowns/>
          <Source/>
          <Size/>
            <button className='bg-[#141d38] text-center text-white px-[40px] py-2 font-[Poppins] font-bold rounded'> 
                      Analyze
                      
                    </button>

       </div>
       <div className="mt-4">    
           <div className="flex items-center justify-between">
            <span className="text-xl font-medium text-[#141d38] ml-3">Shannon's Entropy:</span>
            <span className={`text-lg font-bold`}>{entropyValue.toFixed(2)}</span>
          </div>
           <div
              className={`h-2.5 rounded-full ml-3 ${
                entropyValue < 1.0 ? "bg-[#141d38]" : entropyValue < 2.5 ? "bg-[#141d38]" : "bg-amber-600"
              }`}
              style={{ width: `${Math.min(100, (entropyValue / 5) * 100)}%` }}
            ></div>
        <HistogramChart/>
        <h1 className="text-2xl text-center">Spectrum</h1>
        <h2 className="text-xl text-center">zValue:2.5</h2>

       </div>
    </div>
    </div>
  )
}
