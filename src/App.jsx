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

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   document.body.style.overflow = 'hidden';
  //   setTimeout(() => {
  //     document.body.style.overflow = 'auto';
  //     setIsLoading(false)
  //   }, 3000)
  // },[])

  console.log(isLoading)
  return (
    <div className={`relative bg-black min-w-[768px] overflow-x-hidden overflow-y-visible`} >
      { isLoading && <LoadingPage/> }
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
