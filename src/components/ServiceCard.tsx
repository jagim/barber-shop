type ServiceCardProps = {
    image: string
    title: string
    description: string
}

export default function ServiceCard({ image, title, description }: ServiceCardProps) {
    const sentences = description.split('. ').map(sentence => sentence.trim()).filter(sentence => sentence.length > 0);

    return (
        <article className="flex flex-col border border-orange-400 rounded-2xl w-[24rem] h-full bg-gradient-to-t from-slate-700 to-sky-800 p-4">
            <div className="flex justify-center p-2">
                <img src={image} alt="hair cut icon" className="w-56 object-center" />
            </div>
            <div className="text-slate-100 mx-5 text-wrap">
                <h3 className="text-2xl font-semibold text-orange-400 text-center mt-2 ">{title}</h3>
                {sentences.map((sentence, index) => (
                    <p className="font-light mt-4" key={index}>{sentence}.</p>
                ))}
            </div>
        </article>
    )
}
