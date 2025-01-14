/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import HeaderItem from './HeaderItem'


import logo from './../assets/Image/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";


function Header() {
    const menu = [
    {
        name:'HOME',
        icon:HiHome
    },
    {
        name:'SEARCH',
        icon:HiMagnifyingGlass
    },
    {
        name:'WATCH LIST',
        icon:HiPlus
    },
    {
        name:'ORIGINALS',
        icon:HiStar
    },
    {
        name:'MOVIES',
        icon:HiPlayCircle
    },
    {
        name:'SERIES',
        icon:HiTv
    }
    ];
    const [toggle ,setToggle] = useState(false);

    const handleToggle = () =>{
        if(!toggle){
            setToggle('block')
        }else{
            setToggle('')
        }
    }
  return (
    <div className='flex items-center justify-between  p-5 '>

       <div className="flex gap-8 items-center ">
            <img 
            src={logo} 
            className='
                w-[80px] 
                md:w-[115px] 
                object-cover
            ' 
            />

            <div className="hidden md:flex gap-8">
                {menu.map((item) => (
                    <HeaderItem  name={item.name} Icon={item.icon} key={item.id}/>
                ))}
            </div>

            <div className="flex md:hidden gap-5">
                {menu.map((item,index) =>index < 3 && (
                    <HeaderItem  name={''} Icon={item.icon} key={item.id}/>
                ))}
            </div>
            <div className="md:hidden" onClick={handleToggle}>
                <HeaderItem  Icon={HiDotsVertical}/>
                {toggle ? 
                
                    <div 
                        className="
                            absolute 
                            mt-3 
                            bg-[#121212] 
                            border-[1px]
                            border-gray-700
                            p-3
                            px-5
                            py-4
                    ">
                        {menu.map((item,index) =>index > 2 && (
                            <HeaderItem  name={item.name} Icon={item.icon} key={item.id}/>
                        ))}
                    </div>:null
                }
                
            </div>

       </div>

        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'/>
        
    </div>
  )
}

export default Header
