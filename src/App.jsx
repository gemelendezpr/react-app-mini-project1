
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {


  return (
    <div className='App'>
      
      <Navbar />

      <div className='app-container'>
        <Sidebar />

        <div className='routes'>

          <HomePage />

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default App
