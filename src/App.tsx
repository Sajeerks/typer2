import  { Suspense, lazy } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Loader from './components/Loader'

const App = () => {
  const Home =   lazy( ()=> import("./components/Home"))
  const Learning = lazy( ()=> import("./components/Learning"))
  const Quiz = lazy( ()=> import("./components/Quiz"))
  const Login = lazy( ()=> import("./components/Login"))
  const Result = lazy( ()=> import("./components/Result"))




  return (

    <Router>
      <Header/>
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learn' element={<Learning/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/login' element={<Login/>}/>

       
      </Routes>
      </Suspense>
    </Router>
   
  )
}

export default App