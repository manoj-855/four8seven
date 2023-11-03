import React from 'react'
import { Collapse } from 'react-collapse'

export default function Accordian({open,toggle,title,desc}) {
  return (
      <>
      <div className=''>
                <div className='flex flex-col pb-4'>
                    <div onClick={toggle} className='flex flex-row justify-between'>
                        <span>{title}</span>
                        {open ? <i  class="fa-solid fa-minus"></i> :<i  class="fa-solid fa-plus"></i>}  
                    </div>
                    <Collapse isOpened={open}>
                        <p className='font-thin text-[17px] text-left py-2 font-canela tracking-tighter'>{desc}</p>
                    </Collapse>  
            </div>
         </div>
          <div className='flex border-black border-t-[0.8px] mb-2'>
          </div>
          </>
  )
}
