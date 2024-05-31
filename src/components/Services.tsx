import NavButton from "./NavButton"
import ServiceCard from "./ServiceCard"

export default function Services() {
    return (
        <section className="flex flex-col gap-4 max-w-screen-xl mx-auto mt-16">
            <h1 className="text-6xl text-center my-8 font-extrabold text-yellow-300/85">Our Services</h1>
            <div className="grid xl:grid-cols-3 grid-cols-1 gap-8 place-items-center">
                <ServiceCard
                    image="/haircut-icon.png"
                    title="Hair Cuts"
                    description="Custom styles that fit your preferences and hair type. Our experienced barbers use modern and classic techniques to ensure you leave with a fresh and polished look. Whether it's a traditional cut, a modern fade or a creative style, we guarantee flawless results that enhance your image."
                />

                <ServiceCard
                    image="/shaving-icon.png"
                    title="Shavings"
                    description="Enjoy a superior shaving experience with our classic shaving service. We use high quality razors and premium products for a close shave, leaving your skin smooth and free of irritation. Relax while our expert barbers provide you with a meticulous treatment, including hot towels and moisturizing lotions, for a perfect finish and revitalized skin."
                />

                <ServiceCard
                    image="services-logo.png"
                    title="Treatmens"
                    description="Our treatments are designed to provide comprehensive care and well-being, whit variety of options, from nourishing masks and deep hair conditioners, to facials that cleanse, hydrate and rejuvenate skin. Also specific skin care services, such as exfoliations and facial massages, to help you maintain a healthy and radiant appearance."
                />
            </div>
            <div className="flex justify-center mt-4">
                <div className="bg-slate-800 border-2 border-black rounded-3xl px-6 py-1">
                    <NavButton to="/book" content="Book Now!" />
                </div>
            </div>
        </section>
    )
}
