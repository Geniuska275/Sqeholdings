import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  HamburgerMenuIcon,
  DotFilledIcon,
  CheckIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import './Style.css';
import { FaCaretDown } from "react-icons/fa6";
const Size = () => {
    const [size,setSize]=useState("size")
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button  aria-label="Customise options" className='bg-[#141d38]  justify-between flex items-center text-white px-4 py-2 font-[Poppins] font-bold rounded'>
            {size}  
            <FaCaretDown/>  
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
             <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSize("size")}>
            Size
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSize(100)}>
            100
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSize("1K")} >
           1K
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSize('10K')} >
            10K
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSize('100K')} >
            100K
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSize('1M')} >
            1M
          </DropdownMenu.Item>
          
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Size;