import { useState, forwardRef, useRef, useEffect, useLayoutEffect } from 'react'
import { useSpring, animated, useSpringRef } from '@react-spring/web';
import { gsap } from "gsap";
import { useInView } from 'react-intersection-observer';
import { ReactComponent as TankDialog } from '@/assets/tank-dialog.svg';
import { ReactComponent as SeniorSoldier } from '@/assets/senior-soldier.svg';
import { ReactComponent as SeniorSoldierDialog } from '@/assets/senior-soldier-dialog.svg';
import { ReactComponent as JuniorSoldier } from '@/assets/junior-soldier.svg';
import { ReactComponent as Tree } from '@/assets/tree.svg';
import windowPic from '@/assets/window.gif';
import tankRightPic from '@/assets/tank-right.gif';
import useMediaQuery from '../../hooks/useMediaQuery';

const IntroItem = forwardRef(({ children, alignRight }, ref) => {
  return (
    <div ref={ref} className={`h-[813px] w-full flex items-end ${alignRight ? 'justify-end' : 'justify-start' }`}>
      <div className="h-[58vw] md:h-[570px] w-full md:w-[980px] lg:w-[calc(100%-940px)] bg-primary relative">
        {children}
      </div>
    </div>
  )
})

const DialogText = (props) => {
  return <div {...props} className={`absolute left-1/2 -translate-x-1/2 md:top-[25px] text-typing animate-typing text-secondary text-h7 sm:text-h5 md:text-h4 ${props.className ? props.className : ''}`}/>
}

const FloatingText = ({ children, className, textClassName, ...rest }) => {
  return (
    <div className={`relative flex justify-center items-center text-h8 sm:text-h6 md:text-h4 parallax h-[100px] sm:h-[215px] md:h-[243px] bg-black ${className ? className : ''}`} {...rest}>
      <div className={`absolute text-white sm:text-stroke whitespace-nowrap z-30 ${textClassName ? textClassName : ''}`}>
        {children}
      </div>
    </div>
  )
}

const Layer1 = () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  const { ref } = useInView({
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
    from: { scale: matches ? 0 : 1, opacity: matches ? 1 : 0 },
    to: { scale: 1, opacity: 1 },
    reset: true,
    onRest: (result) => setShowWindowDialogText(Boolean(result.value.scale)),
  })
  return (
    <div className="relative flex items-end pt-[215px] md:pt-[243px]">
      <div ref={ref} className="h-[58vw] md:h-[570px] w-full md:w-[980px] lg:w-[calc(100%-940px)] bg-primary relative">
        <animated.div
          className="w-full h-full absolute origin-bottom"
          style={windowSprings}
        >
          <img className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-y-0 md:translate-x-0 md:left-auto md:right-[187px] md:top-[63px] h-auto w-[64%] md:w-[637px] " src={windowPic}/>
          <img className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-y-0 md:translate-x-0 md:left-auto md:right-[302px] md:top-[238px] h-auto w-[34%] md:w-[336px]" src={tankRightPic}/>
        </animated.div>
        <animated.div
          className="absolute origin-bottom-left w-full h-full md:w-auto md:h-auto md:right-[9px] md:top-[-35px]"
          style={windowDialogSprings}
        >
          <TankDialog className="absolute md:relative h-auto w-[39%] md:w-[390px] top-[-25px] left-[50%] md:top-auto md:left-auto"/>
          { showWindowDialogText && <DialogText className="left-[70%] md:left-1/2 top-[-20px] ">I'm cool !</DialogText> }
        </animated.div>
      </div>
    </div>
  )
}

const Layer2 = () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  const { ref } = useInView({
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
    from: { y: matches ? 155 : 200, x: matches ? 525 : 325 },
    to: { y: matches ? -45 : 0, x: matches ? 220 : 50 },
    reset: true,
    onRest: () => seniorSoldierDialogSpringRef.start(),
  })
  const seniorSoldierDialogSpringRef = useSpringRef();
  const seniorSoldierDialogSprings = useSpring({
    ref: seniorSoldierDialogSpringRef,
    config: { duration: 1000 },
    from: { scale: matches ? 0 : 1, opacity: matches ? 1 : 0 },
    to: { scale: 1, opacity: 1 },
    reset: true,
    onRest: (result) => setShowSoldierDialogText(Boolean(result.value.scale)),
  })

  return (
    <div className="relative flex items-end justify-end text-[36px] leading-[36px] z-[5]">
      <div ref={ref} className="h-[58vw] md:h-[570px] w-full md:w-[980px] lg:w-[calc(100%-940px)] bg-primary relative">
        <animated.div
          className="w-full h-full absolute origin-bottom flex justify-center items-end md:block"
          style={seniorSoldierSprings}
        >
          <SeniorSoldier className="w-[65%] md:w-auto h-auto"/>
        </animated.div>
        <animated.div
          className="w-full h-full absolute md:w-auto md:h-auto left-[2%] top-[-5%] md:left-[-60px] md:top-[-74px] origin-bottom-right"
          style={seniorSoldierDialogSprings}
        >
          <SeniorSoldierDialog className="w-[36%] md:w-auto h-auto"/>
          {showSoldierDialogText && <DialogText className="top-[12%] left-[21%] md:top-[80px] md:left-1/2">!@#$%...</DialogText>}
        </animated.div>
      </div>
    </div>
  )
}

const Layer3 = () => {
  const matches = useMediaQuery('(min-width: 1440px)');
  const { ref } = useInView({
    onChange: (inView) => {
      if (inView) {
        juniorSoldierSpringRef.start({ y: matches ? 570 : 150, x: matches ? 150 : -50, immediate: true });
        treeSpringRef.start();
      }
    },
  });
  const treeSpringRef = useSpringRef();
  const treeSprings = useSpring({
    ref: treeSpringRef,
    config: { duration: 1000 },
    from: { y: matches ? 480 : 50, x: matches ? 130 : 50 },
    to: { y: matches ? -94 : 0, x: matches ? -90 : 0 },
    reset: true,
    onRest: () => juniorSoldierSpringRef.start(),
  })
  const juniorSoldierSpringRef = useSpringRef();
  const juniorSoldierSprings = useSpring({
    ref: juniorSoldierSpringRef,
    config: { duration: 1000 },
    from: { y: matches ? 570 : 50, x: matches ? -450 : -50 },
    to: { y: matches ? 334 : 0, x: matches ? -400 : 0 },
    reset: true,
  })

  return (
    <div className="relative flex items-end text-[36px] leading-[36px] z-[15]">
      <div ref={ref} className="h-[58vw] md:h-[570px] w-full md:w-[980px] lg:w-[calc(100%-940px)] bg-primary relative">
        <animated.div
          className="w-full h-full md:w-auto md:h-auto absolute right-0 flex justify-center items-end md:block"
          style={treeSprings}
        >
          <Tree className="w-[72%] md:w-auto h-auto"/>
        </animated.div>
        <animated.div
          className="w-full h-full md:w-auto md:h-auto absolute right-0 flex justify-center items-end md:block"
          style={juniorSoldierSprings}
        >
          <JuniorSoldier className="w-[26%] md:w-auto h-auto"/>
        </animated.div>
      </div>
    </div>
  )
}

const IntroSection = () => {
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
          start: "top center",
          scrub: true,
          end: "bottom top",
        }
      });
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (tl) {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 1440px)", () => {
        container.current.querySelectorAll('.parallax').forEach(layer => {
          const depth = layer.dataset.depth;
          const movement = -(layer.offsetHeight * depth)
          tl.to(layer.querySelector('.text') || layer, {
            y: movement,
            ease: ""
          })
        });
      })
    }
  }, [tl])
  return (
    <div ref={container} className="overflow-hidden">
      <Layer1/>
      <FloatingText className="parallax" textClassName="text md:translate-x-1/2" data-depth="2">羨慕別人的酷酷網頁動畫...</FloatingText>
      <Layer2/>
      <FloatingText className="parallax z-10" textClassName="text md:-translate-x-1/2" data-depth="3">滿足不了同事的許願...</FloatingText>
      <Layer3/>
      <FloatingText className="parallax z-20" textClassName="text md:translate-x-1/2" data-depth="4">動畫技能樹太雜無從下手...</FloatingText>
    </div>
  )
}

export default IntroSection
