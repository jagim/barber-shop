import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { ToastContainer } from "react-toastify"

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <ToastContainer />
            <Footer />
        </>
    )
};
