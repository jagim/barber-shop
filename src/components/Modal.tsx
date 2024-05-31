import { Dispatch, MouseEvent, SetStateAction } from "react"

type Modal = {
    newPath: string
    flag: boolean
    setFlag: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ newPath, flag, setFlag }: Modal) {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.getAttribute('id') === "close") {
            const newFlag = !flag
            setFlag(newFlag)
        }
        removeEventListener
    }

    return (
        <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center p-5 bg-black/50">
            <div className="lg:max-w-screen-xl max-w-screen-sm bg-slate-100 p-1">
                <img src={newPath} alt="gallery image" />
            </div>
            <button
                id="close"
                className="absolute lg:bottom-10 bottom-52 px-5 py-4 rounded-full text-white border-2 border-white font-black bg-red-900 hover:bg-red-700"
                onClick={handleClick}
            >X</button>
        </div>
    )
}