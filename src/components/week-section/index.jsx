import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ReactComponent as Week1 } from '@/assets/week1.svg';
import { ReactComponent as Week2 } from '@/assets/week2.svg';
import { ReactComponent as Week3 } from '@/assets/week3.svg';
import F1 from '@/assets/F1.svg';
import F2 from '@/assets/F2.svg';
import F3 from '@/assets/F3.svg';
import F4 from '@/assets/F4.svg';
import tankRightPic from '@/assets/tank-right.gif';

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

const WeekSection = () => {
  const panels = useRef([]);
  const panelsContainer = useRef();
  const tank = useRef();
  const flag1 = useRef();
  const flag2 = useRef();
  const [tl, setTl] = useState();
  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "none"
        },
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          start: "center center",
          scrub: true,
          end: () => "+=" + panelsContainer.current.offsetWidth,
          onUpdate: self => animateTank(self.direction),
        }
      });
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl) {
      tl.to(panels.current, { xPercent: -100 })
      .fromTo(tank.current, { x: panels.current[0].offsetWidth / 2 }, { x: panels.current[0].offsetWidth / 2 }, '<')
      .to(flag1.current.querySelector('.F1'), { autoAlpha: 0 })
      .to(flag1.current.querySelector('.F2'), { autoAlpha: 1,}, '<')
      .to(flag1.current.querySelector('.F2'), { autoAlpha: 0,})
      .to(flag1.current.querySelector('.F3'), { autoAlpha: 1,}, '<')
      .to(flag1.current.querySelector('.F3'), { autoAlpha: 0,})
      .to(flag1.current.querySelector('.F4'), { autoAlpha: 1,}, '<')
      .to(panels.current, { xPercent: -200 })
      .fromTo(tank.current, { x: panels.current[0].offsetWidth / 2 },{ x: panels.current[0].offsetWidth / 2 }, '<')
      .to(flag2.current.querySelector('.F1'), { autoAlpha: 0 })
      .to(flag2.current.querySelector('.F2'), { autoAlpha: 1,}, '<')
      .to(flag2.current.querySelector('.F2'), { autoAlpha: 0,})
      .to(flag2.current.querySelector('.F3'), { autoAlpha: 1,}, '<')
      .to(flag2.current.querySelector('.F3'), { autoAlpha: 0,})
      .to(flag2.current.querySelector('.F4'), { autoAlpha: 1,}, '<')
    }
  }, [tl])

  const animateTank = (dir = 1) => {
    if (dir === 1) {
      gsap.to(tank.current, {
        scaleX: 1,
        xPercent: -35,
      })
    } else {
      gsap.to(tank.current, {
        scaleX: -1,
        xPercent: -65,
      })
    }
  }

  return (
    <div ref={panelsContainer} className="w-[300%] h-[1080px] flex flex-nowrap">
      <img ref={tank} src={tankRightPic} width={164} height={66} className="absolute bottom-[317px] z-50"/>
      <div ref={(e) => createPanelsRefs(e, 0)} className="relative w-full h-full bg-primary">
        <Week1 className="h-full w-auto"/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="text-[52px] leading-[60px] text-tertiary">WEEK 1</div>
          <div className="text-[72px] leading-[84px] mb-[47px]">The F2E 活動網站設計</div>
          <div className="text-[36px] leading-[42px] mb-[17px]">視差滾動</div>
          <div className="text-[36px] leading-[42px] mb-[42px]">#板塊設計</div>
          <div className="relative w-full flex justify-center items-end text-[36px] leading-[42px] mb-[43px]">
            <img className="relative left-[-15px] z-20" src={F4}></img>
            <div className="absolute w-1/2 h-[5px] left-1/2 bottom-[22px] overflow-hidden before:contents-[' '] before:absolute before:w-full before:border-t-[10px] before:border-white/50 before:border-dashed z-10"></div>
          </div>
          <Button>查看關卡細節</Button>
        </div>
      </div>
      <div ref={(e) => createPanelsRefs(e, 1)} className="relative w-full h-full bg-[#76B9D6]">
        <Week2 className="h-full w-auto"/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="text-[52px] leading-[60px] text-[#0061A1]">WEEK 2</div>
          <div className="text-[72px] leading-[84px] mb-[47px]">今晚，我想來點點簽</div>
          <div className="text-[36px] leading-[42px] mb-[17px]">canvas</div>
          <div className="text-[36px] leading-[42px] mb-[42px]">#凱鈿行動科技</div>
          <div className="relative w-full flex justify-center items-end text-[36px] leading-[42px] mb-[43px]">
            <div ref={flag1} className="relative w-[141px] h-[229px] left-[-15px]">
              <img className="F1 absolute z-20" src={F1}></img>
              <img className="F2 absolute z-20 opacity-0" src={F2}></img>
              <img className="F3 absolute z-20 opacity-0" src={F3}></img>
              <img className="F4 absolute z-20 opacity-0" src={F4}></img>
            </div>
            <div className="!visible !opacity-100 absolute w-full h-[5px] left-0 bottom-[22px] overflow-hidden before:contents-[' '] before:absolute before:w-full before:border-t-[10px] before:border-white/50 before:border-dashed z-10"></div>
          </div>
          <Button>查看關卡細節</Button>
        </div>
      </div>
      <div ref={(e) => createPanelsRefs(e, 2)} className="relative w-full h-full bg-[#215400]">
        <Week3 className="h-full w-auto"/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="text-[52px] leading-[60px] text-[#C7FFA3]">WEEK 3</div>
          <div className="text-[72px] leading-[84px] mb-[47px]">Scrum 新手村</div>
          <div className="text-[36px] leading-[42px] mb-[17px]">JS draggable</div>
          <div className="text-[36px] leading-[42px] mb-[42px]">#鈦坦科技</div>
          <div className="relative w-full flex justify-center items-end text-[36px] leading-[42px] mb-[43px]">
            <div ref={flag2} className="relative w-[141px] h-[229px] left-[-15px]">
              <img className="F1 absolute z-20" src={F1}></img>
              <img className="F2 absolute z-20 opacity-0" src={F2}></img>
              <img className="F3 absolute z-20 opacity-0" src={F3}></img>
              <img className="F4 absolute z-20 opacity-0" src={F4}></img>
            </div>
            <div className="!visible !opacity-100 absolute w-1/2 h-[5px] left-0 bottom-[22px] overflow-hidden before:contents-[' '] before:absolute before:w-full before:border-t-[10px] before:border-white/50 before:border-dashed z-10"></div>
          </div>
          <Button>查看關卡細節</Button>
        </div>
      </div>
    </div>
  )
}

export default WeekSection
