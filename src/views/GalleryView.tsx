import { MouseEvent, useState } from "react"
import { photos } from "../data/galery.json"
import Modal from "../components/Modal"

export default function GalleryView() {
    const [newPath, setNewPath] = useState<string>()
    const [flag, setFlag] = useState(false)

    const handleClick = (event: MouseEvent<HTMLImageElement>) => {
        const src = event.currentTarget.getAttribute('src')
        const path = src?.replace('thumb', 'display')!
        setNewPath(path)
        setFlag(true)
    }

    return (
        <section>
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col mx-5 gap-8 items-center">
                    <h1 className="text-6xl text-center font-extrabold text-yellow-300/85 mt-24">Gallery</h1>
                    <p className="text-2xl text-slate-300 font-bold">Check out our latest work, we pride ourselves on always being in fashion!</p>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 place-items-center my-16 mx-10 p-2">
                    {photos.map(photo => (
                        <img
                            key={photo.id}
                            src={photo.src}
                            alt={photo.alt}
                            className="w-full h-40 object-cover object-center border-2 border-white hover:scale-110 hover:cursor-pointer transition-transform ease-in-out"
                            onClick={handleClick}
                        />
                    ))}
                </div>
                {flag && <Modal newPath={newPath!} flag={flag} setFlag={setFlag} />}
            </div>
        </section>
    )
}
