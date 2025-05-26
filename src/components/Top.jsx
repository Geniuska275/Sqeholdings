import React from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const bouncingTransition={
    y: {
        duration: 0.4,
        yoyo: Infinity,
        ease: "easeOut"
    }
}

const scrollTop=()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function Top() {
  return (
    <motion.div  
    animate={{
        y:["100%","-100%"]
    }}
    transition={bouncingTransition} 
    onClick={()=>scrollTop()}
    className='fixed bottom-[15px] right-5 bg-blue-400 w-[40px] h-[50px] flex items-center justify-center'>
        <IoIosArrowUp  style={{
            fontSize: "30px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
        }}/>
    </motion.div>
  )
}

export default Top