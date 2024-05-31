
export default function ContactView() {


    return (
        <section className="bg-contact-hero bg-cover">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col gap-8 items-center">
                    <h1 className="text-6xl text-center font-extrabold text-yellow-300/85 mt-24">Contact</h1>
                    <p className="text-2xl text-slate-300 font-bold">Complete the form if you have any concerns.</p>
                    <p className="text-2xl text-slate-300 font-bold">We will contact with you as soon as possible!</p>
                </div>
                <div className="flex justify-center mt-24">
                    <form
                        className="w-1/2 bg-slate-400 rounded-xl p-4 mb-16"
                    >
                        <div className="flex flex-col gap-4">
                            <input
                                className="w-full p-2 border-0 text-xl text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400 placeholder:text-gray-300"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                            />
                            <input
                                className="w-full p-2 border-0 text-xl text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400 placeholder:text-gray-300"
                                type="tel"
                                name="phone"
                                placeholder="Your Phone Number"
                            />
                            <input
                                className="w-full p-2 border-0 text-xl text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400 placeholder:text-gray-300"
                                type="email"
                                name="email"
                                placeholder="Your email"
                            />
                            <textarea
                                name="message"
                                className="w-full p-2 border-0 text-xl text-gray-900 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400 placeholder:text-gray-300"
                                placeholder="How we could help you?"
                                rows={5}
                                maxLength={400}
                            ></textarea>
                            <input
                                type="submit"
                                className="flex justify-center text-yellow-300/80 text-xl font-bold uppercase px-4 py-2 border border-slate-800 bg-slate-600 rounded-md hover:cursor-pointer"
                                value="Send"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
