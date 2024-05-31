import AboutUs from "../components/AboutUs"
import FindUs from "../components/FindUs"
import Services from "../components/Services"

export default function IndexView() {
    return (
        <main className="container mx-auto mt-40">
            <AboutUs />
            <Services />
            <FindUs />
        </main>
    )
}
