
import { BrowserRouter as Router , Routes , Route} from 'react-router'
import MainPage from './Pages/MainPage/MainPage'
import Planets from './Pages/Blogs/Blog'
import ErrorPage from './Components/__Organism/ErrorPage'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/blog/:name' element={<Planets />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
