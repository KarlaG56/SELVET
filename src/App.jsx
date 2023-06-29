import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Page/Landing"
import AcercaDe from "./Components/Page/AcercaDe"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/AcercaDe" element={<AcercaDe />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
