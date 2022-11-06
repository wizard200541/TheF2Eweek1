import { useState, forwardRef } from 'react'
import { useSpring, animated, useSpringRef } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as TankDialog } from '@/assets/tank-dialog.svg';
import { ReactComponent as SeniorSoldier } from '@/assets/senior-soldier.svg';
import { ReactComponent as SeniorSoldierDialog } from '@/assets/senior-soldier-dialog.svg';
import { ReactComponent as JuniorSoldier } from '@/assets/junior-soldier.svg';
import { ReactComponent as Tree } from '@/assets/tree.svg';
import windowPic from '@/assets/window.gif';
import tankRightPic from '@/assets/tank-right.gif';

const IntroItem = forwardRef(({ children, alignRight }, ref) => {
  return (
    <div ref={ref} className={`h-[813px] w-full flex items-end ${alignRight ? 'justify-end' : 'justify-start' }`}>
      <div className="h-[570px] w-[980px] lg:w-[calc(100%-940px)] bg-primary relative">
        {children}
      </div>
    </div>
  )
})

const DialogText = (props) => {
  return <div {...props} className={`absolute left-1/2 -translate-x-1/2 top-[25px] text-typing animate-typing text-secondary ${props.className ? props.className : ''}`}/>
}

const FloatingText = (props) => {
  return <div {...props} className={`absolute text-white text-stroke whitespace-nowrap z-30 ${props.className ? props.className : ''}`}/>
}
const Layer1 = () => {
  const { ref: windowRef } = useInView({
    onChange: (inView) => {
      if (inView) {
        windowDialogSpringRef.start({ scale: 0, immediate: true });
        windowSpringRef.start();
      }
    },
  });
  const [showWindowDialogText, setShowWindowDialogText] = useState(false);
  const windowSpringRef = useSpringRef();
  const windowSprings = useSpring({
    ref: windowSpringRef,
    config: { duration: 1000 },
    from: { scale: 0 },
    to: { scale: 1 },
    reset: true,
    onRest: () => windowDialogSpringRef.start(),
  })
  const windowDialogSpringRef = useSpringRef();
  const windowDialogSprings = useSpring({
    ref: windowDialogSpringRef,
    config: { duration: 1000 },
    from: { scale: 0 },
    to: { scale: 1 },
    reset: true,
    onRest: (result) => setShowWindowDialogText(Boolean(result.value.scale)),
  })
  return (
    <>
      <div offset={1} speed={0.2} className="relative flex items-end text-[36px] leading-[36px]">
        <IntroItem ref={windowRef}>
          <animated.div
            className="w-full h-full absolute origin-bottom"
            style={windowSprings}
          >
            <img className="absolute right-[187px] top-[63px]" src={windowPic} width={637} height={429}/>
            <img className="absolute right-[302px] top-[238px]" src={tankRightPic} width={336} height={135}/>
          </animated.div>
          <animated.div
            className="absolute origin-bottom-left right-[9px] top-[-35px]"
            style={windowDialogSprings}
          >
            <div>
              <TankDialog />
              { showWindowDialogText && <DialogText>I'm cool !</DialogText> }
            </div>
          </animated.div>
        </IntroItem>
      </div>
      <div offset={1.8} speed={1.5} className="relative text-[36px] leading-[36px]">
        <FloatingText className="left-[50%]">羨慕別人的酷酷網頁動畫...</FloatingText>
      </div>
    </>
  )
}

const Layer2 = () => {
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
    config: { duration: 1000 },
    from: { y: 155, x: 525 },
    to: { y: -45, x: 220 },
    reset: true,
    onRest: () => seniorSoldierDialogSpringRef.start(),
  })
  const seniorSoldierDialogSpringRef = useSpringRef();
  const seniorSoldierDialogSprings = useSpring({
    ref: seniorSoldierDialogSpringRef,
    config: { duration: 1000 },
    from: { scale: 0 },
    to: { scale: 1 },
    reset: true,
    onRest: (result) => setShowSoldierDialogText(Boolean(result.value.scale)),
  })

  return (
    <>
      <div offset={2} speed={0.2} className="relative flex items-end overflow-hidden text-[36px] leading-[36px]">
        <IntroItem alignRight ref={seniorSoldierRef}>
          <animated.div
            className="absolute"
            style={seniorSoldierSprings}
          >
            <SeniorSoldier />
          </animated.div>
          <animated.div
            className="absolute left-[-60px] top-[-74px] origin-bottom-right"
            style={seniorSoldierDialogSprings}
          >
            <SeniorSoldierDialog/>
            {showSoldierDialogText && <DialogText className="top-[80px]">!@#$%...</DialogText>}
          </animated.div>
        </IntroItem>
      </div>
      <div offset={2.8} speed={1.5} className="relative text-[36px] leading-[36px]">
        <FloatingText className="right-[50%]">滿足不了同事的許願...</FloatingText>
      </div>
    </>
  )
}

const Layer3 = () => {
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
    config: { duration: 1000 },
    from: { y: 480, x: 130 },
    to: { y: -94, x: -90 },
    reset: true,
    onRest: () => juniorSoldierSpringRef.start(),
  })
  const juniorSoldierSpringRef = useSpringRef();
  const juniorSoldierSprings = useSpring({
    ref: juniorSoldierSpringRef,
    config: { duration: 1000 },
    from: { y: 570, x: -450 },
    to: { y: 334, x: -400 },
    reset: true,
  })

  return (
    <>
      <div offset={3} speed={0.2} className="relative flex items-end overflow-hidden text-[36px] leading-[36px]">
        <IntroItem ref={treeRef}>
          <animated.div
            className="absolute right-0"
            style={treeSprings}
          >
            <Tree />
          </animated.div>
          <animated.div
            className="absolute right-0"
            style={juniorSoldierSprings}
          >
            <JuniorSoldier />
          </animated.div>
        </IntroItem>
      </div>
      <div offset={3.8} speed={1.5} className="relative overflow-hidden text-[36px] leading-[36px]">
        <FloatingText className="left-[50%]">動畫技能樹太雜無從下手...</FloatingText>
      </div>
    </>
  )
}

const IntroSection = () => {
  return (
    <>
      <Layer1/>
      <Layer2/>
      <Layer3/>
    </>
  )
}

export default IntroSection
