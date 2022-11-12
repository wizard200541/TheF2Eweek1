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
import Button from '../button';

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
          toggleActions: 'play none none reverse',
        }
      });
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl) {
      const flagAnimate = (el) => gsap.timeline({ defaults: { ease: "power3.inOut" }}).to(el.querySelector('.F1'), { autoAlpha: 0, duration: 0.1 })
      .to(el.querySelector('.F2'), { autoAlpha: 1, duration: 0.1 }, '<')
      .to(el.querySelector('.F2'), { autoAlpha: 0, duration: 0.1 })
      .to(el.querySelector('.F3'), { autoAlpha: 1, duration: 0.1 }, '<')
      .to(el.querySelector('.F3'), { autoAlpha: 0, duration: 0.1 })
      .to(el.querySelector('.F4'), { autoAlpha: 1, duration: 0.1 }, '<')

      tl.to(panels.current, { xPercent: -100 })
      .fromTo(tank.current, { x: panels.current[0].offsetWidth / 2 }, { x: panels.current[0].offsetWidth / 2 }, '<')
      .add(flagAnimate(flag1.current))
      .to(panels.current, { xPercent: -200 })
      .fromTo(tank.current, { x: panels.current[0].offsetWidth / 2 },{ x: panels.current[0].offsetWidth / 2 }, '<')
      .add(flagAnimate(flag2.current))
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

  console.log(flag1?.current?.getBoundingClientRect())
  return (
    <div ref={panelsContainer} className="w-[300%] h-[100vh] flex flex-nowrap relative overflow-hidden">
      <img ref={tank} src={tankRightPic} width={164} height={66} className="absolute bottom-[290px] md:bottom-[225px] z-50" />
      <div ref={(e) => createPanelsRefs(e, 0)} className="relative w-full h-full bg-primary">
        <Week1 className="absolute w-full h-auto top-1/2 -translate-y-1/2 md:top-0 md:translate-y-0 md:h-full md:w-auto"/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="text-h4 md:text-h2 text-tertiary">WEEK 1</div>
          <div className="text-h4 md:text-h1 mb-[47px]">The F2E 活動網站設計</div>
          <div className="text-h6 md:text-h4 mb-[17px]">視差滾動</div>
          <div className="text-h6 md:text-h4 mb-[42px]">#板塊設計</div>
          <div className="relative w-full flex justify-center items-end mb-[80px] md:mb-[43px]">
            <img className="relative left-[-15px] z-20" src={F4}></img>
            <div className="absolute w-1/2 h-[5px] left-1/2 bottom-[22px] overflow-hidden before:contents-[' '] before:absolute before:w-full before:border-t-[10px] before:border-white/50 before:border-dashed z-10"></div>
          </div>
          <Button className="min-w-[131px] md:text-h4 md:h-[65px] md:min-w-[307px]">查看關卡細節</Button>
        </div>
      </div>
      <div ref={(e) => createPanelsRefs(e, 1)} className="relative w-full h-full bg-[#76B9D6]">
        <Week2 className="absolute w-full h-auto bottom-0 md:h-full md:w-auto"/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="text-h4 md:text-h2 text-[#0061A1]">WEEK 2</div>
          <div className="text-h4 md:text-h1 mb-[47px]">今晚，我想來點點簽</div>
          <div className="text-h6 md:text-h4 mb-[17px]">canvas</div>
          <div className="text-h6 md:text-h4 mb-[42px]">#凱鈿行動科技</div>
          <div className="relative w-full flex justify-center items-end mb-[80px] md:mb-[43px]">
            <div ref={flag1} className="relative w-[141px] h-[229px] left-[-15px]">
              <img className="F1 absolute z-20" src={F1}></img>
              <img className="F2 absolute z-20 opacity-0" src={F2}></img>
              <img className="F3 absolute z-20 opacity-0" src={F3}></img>
              <img className="F4 absolute z-20 opacity-0" src={F4}></img>
            </div>
            <div className="!visible !opacity-100 absolute w-full h-[5px] left-0 bottom-[22px] overflow-hidden before:contents-[' '] before:absolute before:w-full before:border-t-[10px] before:border-white/50 before:border-dashed z-10"></div>
          </div>
          <Button className="min-w-[131px] md:text-h4 md:h-[65px] md:min-w-[307px]">查看關卡細節</Button>
        </div>
      </div>
      <div ref={(e) => createPanelsRefs(e, 2)} className="relative w-full h-full bg-[#215400]">
        <Week3 className="absolute w-full h-auto bottom-0 md:h-full md:w-auto"/>
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white">
          <div className="text-h4 md:text-h2 text-[#C7FFA3]">WEEK 3</div>
          <div className="text-h4 md:text-h1 mb-[47px]">Scrum 新手村</div>
          <div className="text-h6 md:text-h4 mb-[17px]">JS draggable</div>
          <div className="text-h6 md:text-h4 mb-[42px]">#鈦坦科技</div>
          <div className="relative w-full flex justify-center items-end mb-[80px] md:mb-[43px]">
            <div ref={flag2} className="relative w-[141px] h-[229px] left-[-15px]">
              <img className="F1 absolute z-20" src={F1}></img>
              <img className="F2 absolute z-20 opacity-0" src={F2}></img>
              <img className="F3 absolute z-20 opacity-0" src={F3}></img>
              <img className="F4 absolute z-20 opacity-0" src={F4}></img>
            </div>
            <div className="!visible !opacity-100 absolute w-1/2 h-[5px] left-0 bottom-[22px] overflow-hidden before:contents-[' '] before:absolute before:w-full before:border-t-[10px] before:border-white/50 before:border-dashed z-10"></div>
          </div>
          <Button className="min-w-[131px] md:text-h4 md:h-[65px] md:min-w-[307px]">查看關卡細節</Button>
        </div>
      </div>
    </div>
  )
}

export default WeekSection
