import LoadingPage from './components/loading-page'
import LandingPage from './components/landing-page'
import './App.css'

function App() {
  const isLoading = false;
  if (isLoading) {
    return <LoadingPage/>
  }
  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default App
