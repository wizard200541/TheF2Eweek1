import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import F1 from '@/assets/F1.svg';
import F2 from '@/assets/F2.svg';
import F3 from '@/assets/F3.svg';
import F4 from '@/assets/F4.svg';

const Button = ({ children, className, ...rest}) => {
  return (
    <button
      {...rest}
      className={"relative bg-white text-primary min-w-[307px] h-[65px] flex justify-center items-center text-[36px] " +
      "before:contents-[' '] before:absolute before:w-0 before:h-full before:bg-tertiary before:left-[-8px] before:top-[-4px] before:skew-y-[45deg] " +
      "after:contents-[' '] after:absolute after:w-full after:h-0 after:bg-tertiary after:top-[-8px] after:left-[-4px] after:skew-x-[45deg] " +
      "hover:before:w-2 hover:after:h-2 hover:left-[8px] hover:top-[8px] active:bg-secondary active:before:w-0 active:after:h-0 active:left-0 active:top-0 disabled:bg-[#DCDCDC] disabled:text-white " +
      className}
    >
      {children}
    </button>
  )
}

const FlowSection = () => {
  return (
    <div className="w-full h-[2500px] pt-[300px] pb-[150px] px-[155px] bg-black flex flex-col justify-between items-center text-white text-[24px] leading-[44px]">
      <div className="relative w-full flex items-end">
        <div className="relative w-[140px] h-[229px] mr-[70px]">
          <img className="F4 absolute z-20" src={F4}></img>
        </div>
        <div className="w-[518px] h-full flex flex-col justify-between">
          <div className="text-[72px] leading-[84px] text-tertiary">SIGN UP!</div>
          <div className="text-24px">
            開放報名：<br/>
            10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59<br/>
            <br/>
            截止前可修改報名組別。<br/>
          </div>
        </div>
        <Button>點我註冊報名</Button>
      </div>
      <div className="relative w-full flex items-end">
        <div className="relative w-[140px] h-[229px] mr-[70px]">
          <img className="F4 absolute z-20" src={F4}></img>
        </div>
        <div className="w-[518px] h-full flex flex-col justify-between">
          <div className="text-[72px] leading-[84px] text-tertiary">START!</div>
          <div className="text-24px">
            各組別開賽：<br/>
            UI組、團體組開賽 10/31、前端組開賽 11/7<br/>
          </div>
        </div>
      </div>
      <div className="relative w-full flex items-end">
        <div className="relative w-[140px] h-[229px] mr-[70px]">
          <img className="F4 absolute z-20" src={F4}></img>
        </div>
        <div className="w-[518px] h-full flex flex-col justify-between">
          <div className="text-[72px] leading-[84px] text-tertiary">UPLOAD!</div>
          <div className="text-24px">
            登陸作品：<br/>
            10/31(一) 中午 12:00 - 11/28(一) 中午 12:00<br/>
          </div>
        </div>
      </div>
      <div className="relative w-full flex items-end">
        <div className="relative w-[140px] h-[229px] mr-[70px]">
          <img className="F4 absolute z-20" src={F4}></img>
        </div>
        <div className="w-[518px] h-full flex flex-col justify-between">
          <div className="text-[72px] leading-[84px] text-tertiary">STREAM!</div>
          <div className="text-24px">
            資深開發者到來，直播分享零阻礙！<br/>
            <br/>
            線上直播：<br/>
            11/3 - 11/24（每週四）<br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowSection
