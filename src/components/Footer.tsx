import SocialMedia from "./SocialMedia";

export default function Footer() {
    return (
        <footer className="bg-black/80 p-4">
            <div className="max-screen-2xl flex lg:flex-row flex-col gap-8 justify-around items-center p-4">
                <img
                    src="logo.svg"
                    alt="barbershop logo"
                    className="w-32 border border-slate-500 rounded-full bg-slate-800/60"
                />
                <div className="flex flex-col gap-2">
                    <p className="flex gap-2 text-slate-300 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        Falkoner alle 33, Frederiksberg, Denmark
                    </p>
                    <p className="flex gap-2 text-slate-300 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        (+45) 40 24 02 10
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="flex gap-2 text-slate-300 font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-time">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                            <path d="M15 3v4" />
                            <path d="M7 3v4" />
                            <path d="M3 11h16" />
                            <path d="M18 16.496v1.504l1 1" />
                        </svg>
                        Open Hours:
                    </p>
                    <p className="ml-10 text-slate-300 font-light">Monday to Friday: 10:00 - 18:00</p>
                    <p className="ml-10 text-slate-300 font-light">Saturday: 10:00 - 16:00</p>
                </div>
                <SocialMedia />
            </div>
        </footer>
    )
}
