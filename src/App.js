
import { Routes , Route } from "react-router-dom";
// import getSymbols from "./services/getSymbols"
import Home from './pages/Home'
import useFormulario from './hooks/useFormulario'
import useHistorial from './hooks/useHistorial'
import Header from "./components/Header"
import Historial from "./pages/Historial";
//  const codes = ["USD","COP","ILS"]

const App = () =>{
  
  const props = useFormulario({from: 1 ,selectFrom: 'USD',to: 1 ,selectTo:'COP'})
  const {historial,handleHistorial} = useHistorial([])

  return(
  <>
      <Header/>
      <div className="contenedor">
            <Routes>
              <Route path="/" element={ <Home 
                {...props}
                handleHistorial={handleHistorial} 
                />  } />
              <Route path="/historial" element={ <Historial historial={historial}/>  } />
            </Routes>
      </div>   
  </>
  )
}

export default App