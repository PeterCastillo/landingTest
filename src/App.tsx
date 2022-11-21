import NavBar from './components/NavBar'
import "normalize.css"
import Seccion from './components/Seccions'
import "../src/style/app.css"

function App() {

  return (
    <div className="App">
      <div className='ballverde'></div>
      <div className='ballpurplu'></div>
      <NavBar/>
      <Seccion/>
    </div>
  )
}

export default App
