import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Page/Landing"
import AcercaDe from "./Components/Page/AcercaDe"
import Login from "./Components/Page/Login"
import Register from "./Components/Page/Register"
import AdminDispositive from "./Components/Page/AdminDispositive";

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/AcercaDe" element={<AcercaDe />}></Route>
        <Route path="/Inicio-sesion" element={<Login />}></Route>
        <Route path="/Registro" element={<Register/>}></Route>
        <Route path="/Administracion-Dispositivo" element={<AdminDispositive/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
