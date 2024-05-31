import { Link } from "react-router-dom"

export default function SocialMedia() {
    const handleClick = () => {
        window.location.href = "mailto:onyxcph@gmail.com"
    }

    return (
        <section>
            <div className="flex gap-4">
                <Link
                    className="bg-slate-700 flex items-center border border-slate-400 rounded-full p-4 text-slate-400 hover:text-orange-400 hover:border-orange-500 hover:scale-125"
                    to="https://www.facebook.com/ONYXCPH/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                </Link>
                <Link
                    className="bg-slate-700 flex items-center border border-slate-400 rounded-full p-4 text-slate-400 hover:text-orange-400 hover:border-orange-500 hover:scale-125"
                    to="https://www.facebook.com/ONYXCPH/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                    </svg>
                </Link>
                <button
                    type="button"
                    className="bg-slate-700 flex items-center border border-slate-400 rounded-full p-4 text-slate-400 hover:text-orange-400 hover:border-orange-500 hover:scale-125"
                    onClick={handleClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                </button>
            </div>
        </section>
    )
}


