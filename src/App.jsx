import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import LoadingPage from './components/loading-page'
import MainSection from './components/main-section'
import IntroSection from './components/intro-section'
import './App.css'

function App() {
  const isLoading = false;
  if (isLoading) {
    return <LoadingPage/>
  }
  return (
    <Parallax pages={4} className="top-0 left-0 bg-black">
      <MainSection/>
      <IntroSection/>
    </Parallax>
  )
}

export default App
