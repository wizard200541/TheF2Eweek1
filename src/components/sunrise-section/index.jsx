import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ReactComponent as MountainL1 } from '@/assets/mountainL1.svg';
import { ReactComponent as MountainL2 } from '@/assets/mountainL2.svg';
import { ReactComponent as MountainL3 } from '@/assets/mountainL3.svg';
import { ReactComponent as MountainL4 } from '@/assets/mountainL4.svg';
import { ReactComponent as MountainL5 } from '@/assets/mountainL5.svg';
const SunRiseSection = () => {
  const container = useRef();
  const [tl, setTl] = useState();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=1000',
          scrub: true,
          pin: true,
        },
      })
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    if (tl) {
      tl.to('.ml3', { yPercent: 100, duration: 4 })
      tl.to('.ml2', { yPercent: 100, duration: 4 }, '<0.5')
      tl.to('.ml1', { yPercent: 50, duration: 4 }, '<0.5')
      tl.fromTo('.title-container', { bottom: "-5%" }, { bottom: "50%", duration: 3 }, '<')
      tl.to(container.current, { backgroundColor: '#CC4F36', duration: 3 }, '<')
      tl.to('.title', { color: '#FFF', borderColor: '#FFF', duration: 3, onComplete: () => {
        tl.to(".subtitle", { opacity: 1 })
        gsap.fromTo(".subtitle", {text: ''}, {
          text: 'UI、前端接力合作，一同產出完整作品。',
          ease: 'none',
          duration: 3,
        });
      } }, '<0.5')
      tl.to(container.current, { backgroundColor: '#FFB3A4', duration: 3 }, '<')
    }
  }, [tl]);

  return (
    <>
      <div ref={container} className="min-h-[100vh] bg-black relative overflow-hidden">
        <div className="title-container absolute left-1/2 -translate-x-1/2 flex flex-col gap-2">
          <div
            className="title whitespace-nowrap flex md:py-2 px-10 md:px-20 justify-center items-center border-[4px] text-h6 sm:text-h4 md:text-h1 text-[#FFC612] border-[#FFC612]"
          >
            互動式網頁設計
          </div>
          <div
            className="subtitle whitespace-nowrap flex justify-center items-center text-h9 sm:text-h7 md:text-h6 text-white opacity-[0]"
          >
          </div>
        </div>
        <div className="ml1 absolute bottom-0 w-full" ><MountainL1 className="w-full h-auto"/></div>
        <div className="ml2 absolute bottom-[-5%] sm:bottom-[-15%] md:bottom-[-230px] w-full flex justify-end origin-bottom-right"><MountainL2 className="max-w-[1920px] w-full h-auto"/></div>
        <div className="ml3 absolute bottom-[-2%] sm:bottom-[-5%] md:bottom-[-80px] w-full "><MountainL3 className="max-w-[1920px] w-full h-auto"/></div>
        <div className="ml5 absolute bottom-0 w-full flex justify-center" ><MountainL5 className="max-w-[1920px] w-full h-auto"/></div>
        <div className="ml4 absolute bottom-0 left-[5%] w-full flex justify-center" ><MountainL4 className="max-w-[1558px] w-full h-auto"/></div>
      </div>
      <div className="min-h-[491px] bg-black"></div>
    </>
  )
}

export default SunRiseSection
