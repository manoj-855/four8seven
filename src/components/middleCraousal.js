import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Accordian from './accordian';
import pic1 from './images/num1.webp'
import pic2 from './images/num2.webp'
import pic3 from './images/num3.webp'
import { EffectFade, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css'


export default function MiddleCraousal() {
    const [open,setOpen]=useState(false)
    const toggle=(index)=>{
        if(open===index){
            return setOpen(null);
        }
        setOpen(index);
    }
    const accord = [
        {
        title:"DESCRIPTION",
        desc:
            "Blending a duo of light and white Caribbean rums from"+
            "Martinique and Dominican Republic as the smooth base."+
            "Spices are then added and the mix is allowed to steep for 2"+
            "days to draw out all of the flavour before being filtered and"+ 
            "masterfully blended with natural distillates to 10%ABV. The"+
            "result is a buttery, caramel-forward, savoury and spicy light"+
            "spirit with a big impact both on the nose and the taste buds."
        },
        {
            title:"TASTE",
            desc:"Deep bonfire toffee, warming savoury spice, rounded honey"+
                 "sweetness, buttery caramel throughout with a hint of"+
                 "tropical fruit."
        },
        {
            title:"SERVE",
            desc:"Simply serve 50ml chilled over ice with 150ml premium"+
                 "Ginger Ale and a lime wedge. 2.3% ABV."
        },
    ]
  return (
<div className='flex flex-row justify-between  px-40 py-10'>
    <div className="w-[490px] h-[610px] rounded-full border overflow-hidden border-black">
<Swiper 
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
    <SwiperSlide>
        <img
        src={pic1}
        alt="Y1"
        className="mt-[60px] items-center h-[450px] w-[500px] object-contain"/>
    </SwiperSlide>
    <SwiperSlide>
        <img
        src={pic2}
        alt="Y2"
        className="mt-[60px] items-center h-[450px] w-[500px] object-contain"/>
    </SwiperSlide>
    <SwiperSlide>
        <img
        src={pic3}
        alt="Y3"
        className="mt-[60px] items-center h-[450px] w-[500px] object-contain"/>
    </SwiperSlide>
</Swiper>
    </div>
        <div className='flex flex-col pt-10 '>
            <div className='flex justify-between items-start pb-4 mr-2'>
                <span className='px-0 pr-3 font-[300] '>LONDON DRY</span>
                <span className='px-3 underline font-bold'>SPICED BLEND</span>
                <span className='px-3 font-[300]'>APERITIF</span>
                <span className='px-3 font-[300]'>TRIO</span>
            </div>
            <div className='flex border-black border-t-[0.8px] mb-2'>
            </div>
            <div>
                <span className='font-[300] text-[30px] text-[#1D1D1B]'>SPICED BLEND</span> <br></br>
                    <span className='font-baskerville text-[30px] '>made with</span><span className='text-[40px] font-canela text-[#1D1D1B]'>Caribbean Rum</span>
            </div>
            <div className='flex justify-between py-4'>
                <div><span className='font-canela text-[25px]'>Blended</span><span className='font-baskerville text-[20px]'> in </span> <span className='font-canela text-[25px]'>England</span></div>
                <p className='text-[20px] '>10%vol / 700ml</p>
            </div>
            <div className='bg-[#1d1d1b] w-all p-2 rounded-[30px] text-center cursor-pointer hover:bg-[#2455f6] transition-all ease duration-[400ms]'>
                <button className='text-white font-canela text-[25px]'>£29.95 — Add to Bag</button>
            </div>
            <div className='flex justify-center text-center py-3'>
                <span className='text-[#2455f6]'>FREE UK DELIVERY</span>
            </div>
            <div className='flex border-black border-t-[0.8px] mb-2'>
        </div>
            <div className='w-[490px] flex-col justify-center text-center'>
                {accord.map((data,index)=>{
                    return <Accordian key={index} 
                        open={index===open} 
                        title={data.title} 
                        desc={data.desc}
                        toggle={()=>toggle(index)} />
                    })}
            </div>
        </div>
    </div>
  )
}
