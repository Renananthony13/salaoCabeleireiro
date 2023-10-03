import './style/App.css'
import RoutesPage from './routes/RoutesPage'
import NavBar from './components/navbar/navBar'


function App() {

  // const localLocation = window.location.pathname;

  // const showNavbar = localLocation !== '/' 

  return (
    <>
      {/* {showNavbar && <NavBar />} */}
      <RoutesPage />
    </>
  )
}

export default App
