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
    <div>
      <MainSection/>
      <IntroSection/>
    </div>
  )
}

export default App
