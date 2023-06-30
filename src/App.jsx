import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Page/Landing"
import AcercaDe from "./Components/Page/AcercaDe"
import Login from "./Components/Page/Login"
import Register from "./Components/Page/Register"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/AcercaDe" element={<AcercaDe />}></Route>
        <Route path="/Inicio_sesion" element={<Login />}></Route>
        <Route path="/Registro" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
