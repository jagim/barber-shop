import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import { Suspense, lazy } from "react"
import ContactView from "./views/ContactView"

const IndexView = lazy(() => import('./views/IndexView'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Suspense fallback="loading..."><IndexView /></Suspense>} />
                    <Route index path="/contact" element={<Suspense fallback="loading..."><ContactView /></Suspense>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}