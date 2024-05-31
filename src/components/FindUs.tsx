export default function FindUs() {
    return (
        <section className="max-w-5xl mx-auto mt-16">
            <div className="flex flex-col gap-8 p-8">
                <h1 className="text-6xl text-center font-extrabold text-yellow-300/85">Where to find Us?</h1>
                <div className="flex lg:flex-row flex-col lg:items-start items-center gap-8">
                    <img src="onyx-map.webp" alt="map image" className="max-w-lg rounded-lg" />
                    <div className="flex flex-col gap-4 text-wrap">
                        <p className="text-xl text-slate-300 font-light">You can find us at <span className="text-orange-400 font-medium">Falkoner alle 33, Frederiksberg.</span></p>
                        <p className="text-xl text-slate-300 font-light">Our doors are open waiting to provide you with the best attention you deserve!</p>
                        <p className="text-xl text-slate-300 font-light">Monday to Friday from 10am to 6pm and on Saturdays between 10am and 4pm.</p>
                        <p className="text-xl text-slate-300 font-light">We are waiting for you!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
