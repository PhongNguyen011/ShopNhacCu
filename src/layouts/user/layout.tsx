import { Outlet } from "react-router-dom"
import Header from "../../components/user/header"

const LayoutUser = () => {
    return <>
        <Header/>
        <Outlet/>
    </>
}
export default LayoutUser