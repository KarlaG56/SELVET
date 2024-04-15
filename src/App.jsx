import { BrowserRouter, Routes, Route } from "react-router-dom";
import No_dispensable from "./Components/Page/No_dispensable";
import Presupuesto from "./Components/Page/Presupuesto";
import Metricas from "./Components/Page/Metricas";
import Categoria from "./Components/Page/Categoria";
import ProductDispensable from "./Components/Page/ProductDispensable";
import { DatosProvider } from "./context/context"


function App() {

  return (
    <BrowserRouter>
      <DatosProvider>
        <Routes>
          <Route path="/" element={<Presupuesto />}></Route>
          <Route path="/Categoria" element={<Categoria/>}></Route>
          <Route path="/Dispensable" element={<ProductDispensable/>}></Route>
          <Route path="/No_dispensable" element={<No_dispensable />}></Route>
          <Route path="/Metricas" element={<Metricas />}></Route>
        </Routes>
      </DatosProvider>
    </BrowserRouter>
  )
}

export default App;
