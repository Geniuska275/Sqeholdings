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
const Dropdowns = () => {
  const [Format,setFormat]=useState("Number Format")
  const [Binary,setBinary]=useState("Binary")
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button  aria-label="Customise options" className='bg-[#141d38] mt-[50px] flex  justify-between items-center text-white px-4 py-2 font-[Poppins] font-bold rounded'>
            {Format}   
            <FaCaretDown/>  
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
           <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setFormat("Number Format")}>
            Number Format
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setFormat("Bin")}>
            Bin
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setFormat("Hex")} >
           Hex
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setFormat("Decimal")} >
            Decimal
          </DropdownMenu.Item>
          
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdowns;