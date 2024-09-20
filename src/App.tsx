import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutUser from "./layouts/user/layout"
import HomePage from "./pages/home/home"
import ProductPage from "./pages/product/product"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutUser/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="product" element={<ProductPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
