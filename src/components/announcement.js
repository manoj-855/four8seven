import React from 'react'

export default function Announcement() {
    const handleClick=()=>{
        const crossele = document.querySelector('.cross');
        crossele.style.display="none"
    }
  return (
    <div className='bg-[#2455f6] h-[36px] flex flex-row justify-between items-center pr-6 cross '>
        <div></div>
        <p className='text-center text-[white] font-[sans-serif] items-center'>Use code <b>DECEM10</b> for <b>£10 OFF</b> your first order</p>
        <i onClick={handleClick} className='fa-solid fa-x'></i>
    </div>



  )
}
