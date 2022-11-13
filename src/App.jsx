import LoadingPage from './components/loading-page'
import MainSection from './components/main-section'
import IntroSection from './components/intro-section'
import SunRiseSection from './components/sunrise-section'
import WeekSection from './components/week-section'
import FlowSection from './components/flow-section'
import BattleSection from './components/battle-section'
import AwardSection from './components/award-section'
import QASection from './components/qa-section'
import FirmSection from './components/firm-section'
import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import useImagesPreload from './hooks/useImagesPreload';
import tankRightPic from '@/assets/tank-right.gif';
import F1 from '@/assets/F1.svg';
import F2 from '@/assets/F2.svg';
import F3 from '@/assets/F3.svg';
import F4 from '@/assets/F4.svg';
import windowPic from '@/assets/window.gif';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const isLoading = useImagesPreload([
    tankRightPic,
    F1,
    F2,
    F3,
    F4,
    windowPic,
  ]);
  useEffect(()=>{
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  },[isLoading])

  if (isLoading) {
    return <LoadingPage/>
  }
  return (
    <div className={`relative bg-black overflow-x-hidden overflow-y-visible`} >
      <MainSection/>
      <IntroSection/>
      <SunRiseSection/>
      <WeekSection/>
      <FlowSection/>
      <BattleSection/>
      <AwardSection/>
      <QASection/>
      <FirmSection/>
    </div>
  )
}

export default App
