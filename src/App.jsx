import LoadingPage from './components/loading-page'
import MainSection from './components/main-section'
import IntroSection from './components/intro-section'
import SunRiseSection from './components/sunrise-section'
import WeekSection from './components/week-section'
import FlowSection from './components/flow-section'
import './App.css'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  const isLoading = false;
  if (isLoading) {
    return <LoadingPage/>
  }
  return (
    <div className="relative bg-black sm:min-w-[1440px] overflow-x-hidden overflow-y-visible">
      <MainSection/>
      <IntroSection/>
      <SunRiseSection/>
      <WeekSection/>
      <FlowSection/>
      <div className="h-[890px] w-full bg-gray-400"></div>
    </div>
  )
}

export default App
