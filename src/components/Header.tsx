import { useLocation } from "react-router-dom"
import NavButton from "./NavButton"
import { useMemo } from "react"

export default function Header() {
    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (
        <header>
            <div className={isHome ? "border-b-4 border-white" : ""}>
                <div className="container max-w-screen-xl mx-auto flex items-center justify-between py-3 px-4 z-20">
                    <img
                        src="logo.svg"
                        alt="barbershop logo"
                        className="w-32 border-black rounded-full bg-slate-800/60"
                    />
                    <nav className="flex items-center gap-16 px-10 py-1 border border-black rounded-3xl bg-slate-800/60">
                        <NavButton to="/" content="Home" />
                        <NavButton to="/book" content="Book" />
                        <NavButton to="/contact" content="Contact" />
                    </nav>
                </div>

                <div className={isHome ? "flex flex-col relative" : "hidden"} >
                    <img
                        src="https://images.unsplash.com/photo-1635531748077-54c8d53283f4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="hero image"
                        className="w-full h-[50rem] object-cover -mt-40 -z-50"
                    />
                    <div className="md:flex hidden">
                        <img
                            src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="barber photo"
                            className="max-w-md absolute -bottom-40 left-40 border-2 border-white"
                        />
                    </div>
                </div>

            </div>
        </header>
    )
}
