import React,{useState} from 'react'
import decem from './images/decem.png'



export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className='flex flex-row justify-between items-center px-10 py-2' >
        <div className='flex flex-row justify-between items-center'>
            <span className='px-3 font-sans text-[21px] font-[200] text-[#050505]'>SHOP</span>
            <span className='font-sans text-[21px] font-[200] text-[#050505]'>STORY</span>
        </div>
        
        <img className='h-10 w-50' src={decem} alt=""/>
       
      {/* sidebar component */}
       <div onClick={() => setShowSidebar(!showSidebar)} className='cursor-pointer font-sans text-[21px] font-[200] text-[#050505]'>BASKET(0)</div>
       <div className={`flex flex-col  top-0 right-0 w-[35vw] bg-white fixed h-full z-40 ease-in-out duration-[300ms] ${
            showSidebar ? "translate-x-0 " : "translate-x-full"
          }`}>
          <div className="flex justify-between items-center p-3">
              <span className='font-sans text-[21px] font-[200] text-[#050505]'>BASKET(0)</span>
              <i onClick={() => setShowSidebar(!showSidebar)} class="fa-solid fa-xmark"></i>
          </div>
          <div className='w-all border-black border-t-[0.8px] mb-2'>
          </div>
          <p className='text-center font-canela text-[16px] mt-7'>Your cart is empty</p>
      </div> 
    </div>
  )
}

