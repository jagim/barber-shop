import { NavLink } from "react-router-dom";

type NavButtonProps = {
    to: string
    content: string
}

export default function NavButton({ to, content }: NavButtonProps) {
    return (
        <NavLink
            className="p-1 text-xl text-yellow-300/90 hover:text-orange-500 font-semibold hover:font-bold hover:scale-110"
            to={to}
        >{content}
        </NavLink>
    )
}
