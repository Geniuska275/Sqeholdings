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
const Source = () => {
    const [source,setSource]=useState("source")
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button  onClick={()=>setSource("source")} aria-label="Customise options" className='bg-[#141d38]  justify-between flex items-center text-white px-4 py-2 font-[Poppins] font-bold rounded'>
            {source}
            <FaCaretDown/>  
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
             <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSource("Source")}>
            source
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSource(".csv")}>
            .csv
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" onClick={()=>setSource(".txt")} >
           .txt
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Source;