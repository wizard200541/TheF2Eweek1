import { useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";
import { ReactComponent as MountainL1 } from '@/assets/mountainL1.svg';
import { ReactComponent as MountainL2 } from '@/assets/mountainL2.svg';
import { ReactComponent as MountainL3 } from '@/assets/mountainL3.svg';
import { ReactComponent as MountainL4 } from '@/assets/mountainL4.svg';
import { ReactComponent as MountainL5 } from '@/assets/mountainL5.svg';
const SunRiseSection = () => {
  const container = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.inOut",
      },
      scrollTrigger: {
        trigger: container.current, // 決定scrolltrigger要以哪一個元素作為觸發基準點
        markers: true, // 開啟start & end標記點，單純方便瀏覽動畫開始與結束點
        start: 'top top', // 決定動畫開始點的位置
        end: '+=1000', // 決定動畫結束點的位置
        scrub: true, //重要！開啟scrub來決定動畫播放是否依賴視窗滾動
        pin: true,
      },
    })

    tl.to('.ml3', { yPercent: 100, duration: 4 })
    tl.to('.ml2', { yPercent: 100, duration: 4 }, '<0.5')
    tl.to('.ml1', { yPercent: 50, duration: 4 }, '<0.5')
    tl.to('.title', { top: "50%", duration: 3 }, '<')
    tl.to('.title', { color: '#FFF', borderColor: '#FFF', duration: 3, onComplete: () => {
      tl.to(".subtitle", { opacity: 1 })
      gsap.fromTo(".subtitle", {text: ''}, {
        text: 'UI、前端接力合作，一同產出完整作品。',
        ease: 'none',
        duration: 3,
      });
    } }, '<0.5')
    tl.to(container.current, { backgroundColor: '#CC4F36' }, '<')
    tl.to(container.current, { backgroundColor: '#FFB3A4' }, '>')

    return () => {
      tl.kill();
    };
  });

  return (
    <>
      <div ref={container} className="min-h-[100vh] bg-black relative overflow-hidden">
        <div
          className="title absolute w-[789px] h-[140px] flex justify-center items-center border-[4px] text-[72px] bg-transparent left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 text-[#FFC612] border-[#FFC612]"
        >
          互動式網頁設計
        </div>
        <div
          className="subtitle absolute w-[700px] h-[56px] flex justify-center items-center text-[24px] bg-transparent left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 text-white opacity-[0]"
        >
        </div>
        <div className="ml1 absolute bottom-0 w-full" ><MountainL1 className="w-full h-auto"/></div>
        <div className="ml2 absolute bottom-[-230px] w-full flex justify-end origin-bottom-right"><MountainL2 className="max-w-[1920px] w-full h-auto"/></div>
        <div className="ml3 absolute bottom-[-80px] w-full "><MountainL3 className="max-w-[1920px] w-full h-auto"/></div>
        <div className="ml5 absolute bottom-0 w-full flex justify-center" ><MountainL5 className="max-w-[1920px] w-full h-auto"/></div>
        <div className="ml4 absolute bottom-0 left-[105px] w-full flex justify-center" ><MountainL4 className="max-w-[1558px] w-full h-auto"/></div>
      </div>
      <div className="min-h-[1491px] bg-black"></div>
    </>
  )
}

export default SunRiseSection
