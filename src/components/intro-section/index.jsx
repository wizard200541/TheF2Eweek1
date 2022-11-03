import { useState, forwardRef, Fragment } from 'react'
import { useSpring, animated, useSpringRef, useChain } from '@react-spring/web';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useInView } from 'react-intersection-observer';
import { ReactComponent as TankDialog } from '@/assets/tank-dialog.svg';
import { ReactComponent as SeniorSoldier } from '@/assets/senior-soldier.svg';
import { ReactComponent as SeniorSoldierDialog } from '@/assets/senior-soldier-dialog.svg';
import { ReactComponent as JuniorSoldier } from '@/assets/junior-soldier.svg';
import { ReactComponent as Tree } from '@/assets/tree.svg';
import windowPic from '@/assets/window.gif';
import tankRightPic from '@/assets/tank-right.gif';
import Section from '../section'

const IntroItem = forwardRef(({ children, alignRight }, ref) => {
  return (
    <div ref={ref} className={`h-[813px] w-full flex items-end ${alignRight ? 'justify-end' : 'justify-start' }`}>
      <div className="h-[570px] lg:w-[calc(100%-940px)] w-[980px] bg-primary relative">
        {children}
      </div>
    </div>
  )
})

const IntroSection = () => {
  const { ref: seniorSoldierRef } = useInView({
    onChange: (inView) => {
      if (inView) {
        seniorSoldierDialogSpringRef.start({ scale: 0, immediate: true });
        seniorSoldierSpringRef.start();
      }
    },
  });
  const [showSoldierDialogText, setShowSoldierDialogText] = useState(false);
  const seniorSoldierSpringRef = useSpringRef();
  const seniorSoldierSprings = useSpring({
    ref: seniorSoldierSpringRef,
    config: {
      duration: 1500,
    },
    from: {
      y: 155,
      x: 525,
    },
    to: {
      y: -45,
      x: 220,
    },
    reset: true,
    onRest: () => seniorSoldierDialogSpringRef.start(),
  })
  const seniorSoldierDialogSpringRef = useSpringRef();
  const seniorSoldierDialogSprings = useSpring({
    ref: seniorSoldierDialogSpringRef,
    config: {
      duration: 1500,
    },
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
    reset: true,
    onRest: (result) => setShowSoldierDialogText(Boolean(result.value.scale)),
  })

  const { ref: treeRef } = useInView({
    onChange: (inView) => {
      if (inView) {
        juniorSoldierSpringRef.start({ y: 570, x: 150, immediate: true });
        treeSpringRef.start();
      }
    },
  });
  const treeSpringRef = useSpringRef();
  const treeSprings = useSpring({
    ref: treeSpringRef,
    config: {
      duration: 1500,
    },
    from: {
      y: 480,
      x: 200,
    },
    to: {
      y: -94,
      x: 130,
    },
    reset: true,
    onRest: () => juniorSoldierSpringRef.start(),
  })
  const juniorSoldierSpringRef = useSpringRef();
  const juniorSoldierSprings = useSpring({
    ref: juniorSoldierSpringRef,
    config: {
      duration: 1000,
    },
    from: {
      y: 570,
      x: 200,
    },
    to: {
      y: 334,
      x: 300,
    },
    reset: true,
  })
  return (
    <Fragment>
      <ParallaxLayer offset={1} speed={0.4} className="relative flex items-end text-[36px] leading-[36px]">
        <IntroItem>
          <img className="absolute right-[187px] top-[63px]" src={windowPic} width={637} height={429}/>
          <img className="absolute right-[302px] top-[238px]" src={tankRightPic} width={336} height={135}/>
          <div className="absolute right-[9px] top-[-35px]">
            <TankDialog />
            <div className="absolute left-1/2 -translate-x-1/2 top-[25px] text-typing animate-typing text-secondary">I'm cool !</div>
          </div>
        </IntroItem>
      </ParallaxLayer>
      <ParallaxLayer offset={1.6} speed={1.5} className="relative text-[36px] leading-[36px]">
        <div className="absolute text-white text-stroke left-[50%] whitespace-nowrap z-30">羨慕別人的酷酷網頁動畫...</div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.4} className="relative flex items-end overflow-hidden text-[36px] leading-[36px]">
        <IntroItem alignRight ref={seniorSoldierRef}>
          <animated.div
            style={{
              position: 'absolute',
              ...seniorSoldierSprings,
            }}
          >
            <SeniorSoldier />
          </animated.div>
          <animated.div
            style={{
              position: 'absolute',
              left: '-60px',
              top: '-74px',
              transformOrigin: 'right bottom',
              ...seniorSoldierDialogSprings,
            }}
          >
            <SeniorSoldierDialog/>
            {showSoldierDialogText && <div className="absolute left-1/2 -translate-x-1/2 top-[80px] text-typing animate-typing text-secondary">!@#$%...</div>}
          </animated.div>
        </IntroItem>
      </ParallaxLayer>
      <ParallaxLayer offset={2.8} speed={1.5} className="relative text-[36px] leading-[36px]">
        <div className="absolute text-white text-stroke right-[50%] whitespace-nowrap z-30">滿足不了同事的許願...</div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.4} className="relative flex items-end overflow-hidden text-[36px] leading-[36px]">
        <IntroItem ref={treeRef}>
          <animated.div
            style={{
              position: 'absolute',
              ...treeSprings,
            }}
          >
            <Tree />
          </animated.div>
          <animated.div
            style={{
              position: 'absolute',
              ...juniorSoldierSprings,
            }}
          >
            <JuniorSoldier />
          </animated.div>
        </IntroItem>
      </ParallaxLayer>
      <ParallaxLayer offset={3.8} speed={1.5} className="relative overflow-hidden text-[36px] leading-[36px]">
        <div className="absolute text-white text-stroke left-[50%] whitespace-nowrap z-30">動畫技能樹太雜無從下手...</div>
      </ParallaxLayer>
    </Fragment>
  )
}

export default IntroSection
