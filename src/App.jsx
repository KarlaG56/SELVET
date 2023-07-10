import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Page/Landing"
import AcercaDe from "./Components/Page/AcercaDe"
import Login from "./Components/Page/Login"
import Register from "./Components/Page/Register"
import AdminDispositive from "./Components/Page/AdminDispositive";
import AdminUsers from "./Components/Page/AdminUsers";
import PerfilAdmin from "./Components/Page/PerfilAdmin";
import PerfilUser from "./Components/Page/PerfilUser";
import EditPerfilAdmin from "./Components/Page/EditPerfilAdmin";
import ManualOPerativa from "./Components/Page/ManualOPerativa";
import ManualUsuario from "./Components/Page/ManualUsuario";
import MetricasAdmin from "./Components/Page/MetricasAdmin";



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
        <Route path="/Perfil-usuario" element={<PerfilUser/>}></Route>
        <Route path="/Editar-Perfil" element={<EditPerfilAdmin/>}></Route> 
        <Route path="/Manual-operativa" element={<ManualOPerativa/>}></Route>
        <Route path="/Manual-usuario" element={<ManualUsuario/>}></Route>  
        <Route path="/Metricas" element={<MetricasAdmin/>}></Route>   
      </Routes>
    </BrowserRouter>

  )
}

export default App;
