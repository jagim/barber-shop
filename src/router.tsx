import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import { Suspense, lazy } from "react"

const IndexView = lazy(() => import('./views/IndexView'))
const BookView = lazy(() => import('./views/BookView'))
const GalleryView = lazy(() => import('./views/GalleryView'))
const ContacView = lazy(() => import('./views/ContactView'))

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index path="/" element={<Suspense fallback="loading..."><IndexView /></Suspense>} />
                    <Route path="/book" element={<Suspense fallback="loading..."><BookView /></Suspense>} />
                    <Route path="/gallery" element={<Suspense fallback="loading..."><GalleryView /></Suspense>} />
                    <Route path="/contact" element={<Suspense fallback="loading..."><ContacView /></Suspense>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}