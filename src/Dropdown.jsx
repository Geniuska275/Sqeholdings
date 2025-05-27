import React from 'react';
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
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button  aria-label="Customise options" className='bg-[#1b87fb] flex items-center text-white px-4 py-2 font-[Poppins] font-bold rounded'>
            Number Format    
            <FaCaretDown/>  
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            Binary
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" >
           Hex
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem" >
            Decimal
          </DropdownMenu.Item>
          
          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdowns;