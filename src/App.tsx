import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutUser from "./layouts/user/layout"
import HomePage from "./pages/home/home"
import ProductPage from "./pages/product/product"
import ProductdetalsPage from "./pages/productdetals/productdetal"
import LayoutAdmin from "./layouts/admin/layout"
import AdminDashboard from "./pages/admin/dashboard/dashboard"
import Authen from "./pages/authen/authen"
import ShopPage from "./shop/shop"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutUser/>}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="product" element={<ProductPage/>}/>
            <Route path="productdetals" element={<ProductdetalsPage/>}/>
            <Route path="authen" element={<Authen/>}/>
            <Route path="shop" element={<ShopPage/>}/>
          </Route>
          <Route element={<LayoutAdmin/>}>
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
