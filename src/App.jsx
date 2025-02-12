import img from './assets/planet-mercury.svg'
import { BrowserRouter as Router , Routes , Route} from 'react-router'
import MainPage from './Pages/MainPage/MainPage'
import Planets from './Pages/Blogs/Blog'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/blog/:name' element={<Planets />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
