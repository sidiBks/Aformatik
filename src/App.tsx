import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <main className='container w-full mx-auto my-3 flex-1 flex'>
        <div className='mx-5 flex-1'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
