import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import F1 from '@/assets/F1.svg';
import F2 from '@/assets/F2.svg';
import F3 from '@/assets/F3.svg';
import F4 from '@/assets/F4.svg';
import Button from '../button';

const Flag = ({ children }) => {
  return (
    <div className="relative w-[85px] h-[138px] md:w-[140px] md:h-[229px] mr-[42px] md:mr-[70px]">
      <img className="F1 absolute z-20" src={F1}></img>
      <img className="F2 absolute z-20 opacity-0" src={F2}></img>
      <img className="F3 absolute z-20 opacity-0" src={F3}></img>
      <img className="F4 absolute z-20 opacity-0" src={F4}></img>
      {children}
    </div>
  )
}
const FlowItem = ({ children, title }) => {
  return (
    <div className="w-[336px] md:w-[518px] h-full flex flex-col justify-between flex-1">
      <div className="title text-h4 md:text-h1 text-tertiary">{title}</div>
      <div className="content text-h7 md:text-h6">
        {children}
      </div>
    </div>
  )
}
const FlowSection = () => {
  const container = useRef();
  const dashed = useRef();
  const flows = useRef([]);
  const createFlowsRefs = (flow, index) => {
    flows.current[index] = flow;
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const flagAnimate = (el, idx) => gsap.timeline({ defaults: { ease: "power3.inOut" }}).to(el.querySelector('.F1'), { autoAlpha: 0, duration: 0.1, })
      .to(el.querySelector('.F2'), { autoAlpha: 1, duration: 0.1 }, '<')
      .to(el.querySelector('.F2'), { autoAlpha: 0, duration: 0.1 })
      .to(el.querySelector('.F3'), { autoAlpha: 1, duration: 0.1 }, '<')
      .to(el.querySelector('.F3'), { autoAlpha: 0, duration: 0.1 })
      .to(el.querySelector('.F4'), { autoAlpha: 1, duration: 0.1 }, '<')
      flows.current.forEach((elm, idx) => {
        const tl = gsap.timeline({
          defaults: {
            ease: "none"
          },
          scrollTrigger: {
            trigger: elm,
            scrub: true,
            start: "center bottom",
            end: "bottom center",
          }
        }).add(flagAnimate(elm, idx))
        .fromTo(elm.querySelector('.title'), { xPercent: 100, autoAlpha: 0, color: '#FFB3A4' }, { xPercent: 0, autoAlpha: 1, color: '#FFB3A4', duration: 0.1, ease: "ease.in" })
        .fromTo(elm.querySelector('.content'), { xPercent: 100, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.1, ease: "ease.in" }, '<0.25')
        if (idx + 1 < flows.current.length) {
          tl.fromTo(dashed.current, {height: ((container.current.offsetHeight - 370) / 3) * idx}, { height: ((container.current.offsetHeight - 370) / 3) * (idx + 1), ease: "none" })
        }
      })
    });
    return () => ctx.revert();
  }, []);


  return (
    <div ref={container} className="w-full h-[1500px] md:h-[2500px] pt-[200px] pb-[150px] m-auto bg-black flex flex-col justify-between items-center text-white">
      <div ref={(e) => createFlowsRefs(e, 0)} className="flow relative flex justify-between items-end px-[10%] w-full">
        <Flag>
          <div ref={dashed} className="absolute h-0 w-[5px] left-[60%] overflow-hidden before:contents-[' '] before:absolute before:h-full before:border-l-[10px] before:border-white/50 before:border-dashed"></div>
        </Flag>
        <FlowItem title="SIGN UP!">
          開放報名：<br/>
          10/13(四) 早上 11:00 - 11/6(日) 晚上 23:59<br/>
          <br/>
          截止前可修改報名組別。<br/>
        </FlowItem>
        <Button className="min-w-[131px] md:min-w-[307px]">點我註冊報名</Button>
      </div>
      <div ref={(e) => createFlowsRefs(e, 1)} className="flow relative flex justify-between items-end px-[10%] w-full">
        <Flag/>
        <FlowItem title="START!">
          各組別開賽：<br/>
          UI組、團體組開賽 10/31、前端組開賽 11/7<br/>
        </FlowItem>
      </div>
      <div ref={(e) => createFlowsRefs(e, 2)} className="flow relative flex justify-between items-end px-[10%] w-full">
        <Flag/>
        <FlowItem title="UPLOAD!">
          登陸作品：<br/>
          10/31(一) 中午 12:00 - 11/28(一) 中午 12:00<br/>
        </FlowItem>
      </div>
      <div ref={(e) => createFlowsRefs(e, 3)} className="flow relative flex justify-between items-end px-[10%] w-full">
        <Flag/>
        <FlowItem title="STREAM!">
          資深開發者到來，直播分享零阻礙！<br/>
          <br/>
          線上直播：<br/>
          11/3 - 11/24（每週四）<br/>
        </FlowItem>
      </div>
    </div>
  )
}

export default FlowSection
