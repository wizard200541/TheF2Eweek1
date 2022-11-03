import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import LoadingPage from './components/loading-page'
import MainSection from './components/main-section'
import IntroSection from './components/intro-section'
import './App.css'
import { ReactComponent as MountainL1 } from '@/assets/mountainL1.svg';
import { ReactComponent as MountainL2 } from '@/assets/mountainL2.svg';
import { ReactComponent as MountainL3 } from '@/assets/mountainL3.svg';
import { ReactComponent as MountainL4 } from '@/assets/mountainL4.svg';
import { ReactComponent as MountainL5 } from '@/assets/mountainL5.svg';
import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

function App() {
  const scrollRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop)
  }, [])
  const { ref: layer1Ref, inView } = useInView({
    onChange: (inView) => {
      if (inView) {
        setScrollTop(scrollRef.current.container.current.scrollTop);
      }
    },
  });

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0
  }));
  const parallaxLevel = 10;
  const MountainL2Spring = springscrollY.to(
    (o) => `translateY(${o / parallaxLevel}px)`
  );
  const MountainL1Spring = springscrollY.to(
    (o) => `translateY(${o / (parallaxLevel * 2)}px)`
  );
  const backgroundSpring = springscrollY
  .to(o => o / 8500)
  .to({
    range: [0, .4, .5, .6, 1],
    output: ['#000', '#000', '#CC4F36','#FFB3A4', '#FFB3A4'],
  }).to((o) => o);

  const titleSpring = springscrollY
  .to(o => o / 8500)
  .to({
    range: [0, .4, .5, .6, 1],
    output: ['#000', '#000', '#FFC612','#FFF', '#FFF'],
  }).to((o) => o);

  const subTitleSpring = springscrollY
  .to(o => o / 8500)
  .to({
    range: [0, .4, .5, .6, .7, 1],
    output: ['#000', '#000', '#CC4F36','#FFB3A4', '#FFF', '#FFF'],
  }).to((o) => o);

  useEffect(() => {
    if (inView) {
      scrollRef.current.container.current.addEventListener('scroll', onScroll)
    } else {
      scrollRef.current.container.current.removeEventListener('scroll', onScroll)
    }
  }, [inView])

  useEffect(() => {
    springsetScrollY({ springscrollY: scrollTop })
  }, [scrollTop])

  const isLoading = false;
  if (isLoading) {
    return <LoadingPage/>
  }
  return (
    <Parallax ref={scrollRef} pages={9} className="top-0 left-0 bg-black sm:min-w-[1440px]">
      <MainSection/>
      <IntroSection/>
      <ParallaxLayer sticky={{ start: 4, end: 8 }} className="relative overflow-hidden text-[36px] leading-[36px] bg-transparent z-10">
        <animated.div className="absolute bottom-0 w-full h-full" style={{ background: backgroundSpring }}></animated.div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 5.5, end: 8 }} className="relative bg-transparent flex justify-center items-center z-20">
        <animated.div
          className="relative w-[789px] h-[140px] flex justify-center items-center border-[4px] text-[72px] bg-transparent top-[-90px]"
          style={{
            borderColor: titleSpring,
            color: titleSpring,
          }}
        >
          互動式網頁設計
        </animated.div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 7.5, end: 8 }} className="relative bg-transparent flex justify-center items-center z-20">
        <animated.div
          className="relative w-[700px] h-[56px] flex justify-center items-center text-[24px] bg-transparent top-[20px]"
          style={{
            color: subTitleSpring,
          }}
        >
          UI、前端接力合作，一同產出完整作品。
        </animated.div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 4, end: 8 }} className="relative overflow-hidden text-[36px] leading-[36px] bg-transparent z-30">
        <animated.div ref={layer1Ref} className="absolute bottom-[125px] w-full h-auto" style={{ transform: MountainL1Spring }}><MountainL1 className="w-full h-auto"/></animated.div>
        <animated.div className="absolute bottom-0 w-full h-auto" style={{ transform: MountainL2Spring }}><MountainL2 className="w-full h-auto"/></animated.div>
        <animated.div className="absolute bottom-[190px] w-full h-auto" style={{ transform: MountainL2Spring }}><MountainL3 className="w-full h-auto"/></animated.div>
      </ParallaxLayer>
      <ParallaxLayer sticky={{ start: 4, end: 8 }} className="relative overflow-hidden text-[36px] leading-[36px] bg-transparent z-40">
        <MountainL5 className="absolute bottom-0 w-full h-auto"/>
        <MountainL4 className="absolute bottom-0 left-[100px] w-full h-auto"/>
      </ParallaxLayer>
    </Parallax>
  )
}

export default App
