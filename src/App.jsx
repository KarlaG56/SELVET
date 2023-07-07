import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Page/Landing"
import AcercaDe from "./Components/Page/AcercaDe"
import Login from "./Components/Page/Login"
import Register from "./Components/Page/Register"
import AdminDispositive from "./Components/Page/AdminDispositive";
import AdminUsers from "./Components/Page/AdminUsers";
import PerfilAdmin from "./Components/Page/PerfilAdmin";
import EditPerfilAdmin from "./Components/Page/EditPerfilAdmin";


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/AcercaDe" element={<AcercaDe />}></Route>
        <Route path="/Inicio-sesion" element={<Login />}></Route>
        <Route path="/Registro" element={<Register/>}></Route>
        <Route path="/Administracion-dispositivo" element={<AdminDispositive/>}></Route>
        <Route path="/Administracion-usuarios" element={<AdminUsers/>}></Route>
        <Route path="/Perfil-administrador" element={<PerfilAdmin/>}></Route>
        <Route path="/Editar-Perfil-administrador" element={<EditPerfilAdmin/>}></Route>        
      </Routes>
    </BrowserRouter>

  )
}

export default App;
