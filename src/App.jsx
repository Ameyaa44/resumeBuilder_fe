import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landingpage from './Pages/Landingpage'
import ResumeInstructions from './Pages/ResumeInstructions'
import ResumeForm from './Pages/ResumeForm'
import History from './Pages/History'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/instructions' element={<ResumeInstructions/>}/>
        <Route path='/form' element={<ResumeForm/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
