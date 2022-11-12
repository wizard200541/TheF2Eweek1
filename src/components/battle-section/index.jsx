import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ReactComponent as BattleField1 } from '@/assets/battle-field1.svg';
import { ReactComponent as BattleField2 } from '@/assets/battle-field2.svg';
import { ReactComponent as BattleField3 } from '@/assets/battle-field3.svg';
import { ReactComponent as BattleField4 } from '@/assets/battle-field4.svg';
import { ReactComponent as TankYellow } from '@/assets/tank-right.svg';
import { ReactComponent as TankBlue } from '@/assets/tank-blue.svg';
import { ReactComponent as TankGreen } from '@/assets/tank-green.svg';
import { ReactComponent as TankOrange } from '@/assets/tank-orange.svg';
import { ReactComponent as TankPurple } from '@/assets/tank-purple.svg';
import { ReactComponent as TankRed } from '@/assets/tank-red.svg';

const BattleSection = () => {
  const container = useRef();
  const titles = useRef();
  const [tl, setTl] = useState();
  const [tl2, setTl2] = useState();
  const bfs = useRef([]);
  const createBfsRefs = (battlefield, index) => {
    bfs.current[index] = battlefield;
  };
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: container.current,
          end: '+=300px',
          pin: true,
          scrub: true,
        },
      })
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "restart none resume none",
          start: 'top top',
        },
      });
      setTl(tl);
      setTl2(tl2);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl && tl2) {
      bfs.current.forEach(bf => {
        tl.to(bf, {
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: 'bottom bottom',
            pin: bf,
          }
        })
      })
      tl.to('.green', { y: 20, x: 70 })
      .to('.yellow', { x: 70 }, '<0.2')
      .to('.red', { x: 70 }, '<')
      .to('.blue', { y: 20, x: 30 }, '<0.2')
      .to('.orange', { y: -20, x: 70 }, '<')
      .to('.purple', { y: -25, x: 60 }, '<0.2')
      tl2.fromTo(titles.current.querySelector('.title1'), {text: ''}, {
        text: '區區修煉已經無法滿足了嗎？',
        ease: 'none',
        duration: 3,
      }).fromTo(titles.current.querySelector('.title2'), {text: ''}, {
        text: '還有比賽等著你！',
        ease: 'none',
        duration: 3,
      });
    }
  }, [tl, tl2]);

  return (
    <div ref={container} className="h-[100vh] w-full relative pt-[150px] overflow-hidden">
      <div ref={titles} className="text-h4 md:text-h2 text-white w-full absolute bottom-[50%] flex flex-col justify-center items-center">
        <div className="title1"></div>
        <div className="title2"></div>
      </div>
      <div ref={e => createBfsRefs(e, 0)} className="absolute bottom-0 w-full">
        <BattleField4 className="w-full h-auto"/>
        <div className="green absolute w-[3.5%] top-[0] left-[48%]"><TankGreen className="w-full h-auto"/></div>
      </div>
      <div ref={e => createBfsRefs(e, 1)} className="absolute bottom-0 w-full flex justify-end">
        <BattleField3 className="max-w-[1471px] w-[76%] h-auto right-0"/>
        <div className="orange absolute w-[12%] top-[26%] right-[16%]"><TankOrange className="w-full h-auto"/></div>
        <div className="purple absolute w-[7.1%] top-[27%] right-[28%]"><TankPurple className="w-full h-auto"/></div>
        <div className="red absolute w-[5.7%] top-[-11%] right-[7%]"><TankRed className="w-full h-auto"/></div>
      </div>
      <div ref={e => createBfsRefs(e, 2)} className="absolute bottom-0 w-full">
        <BattleField2 className="max-w-[1398px] w-[72%] h-auto left-0"/>
        <div className="yellow absolute w-[19%] top-[0] left-[8%]"><TankYellow className="w-full h-auto"/></div>
        <div className="blue absolute w-[14%] top-[24%] left-[40%]"><TankBlue className="w-full h-auto"/></div>
      </div>
      <div ref={e => createBfsRefs(e, 3)} className="absolute bottom-0 w-full"><BattleField1 className="w-full h-auto"/></div>
    </div>
  )
}

export default BattleSection
