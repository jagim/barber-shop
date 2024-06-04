import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ChangeEventHandler, useMemo, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import Calendar, { CalendarProps } from "react-calendar"
import 'react-calendar/dist/Calendar.css'
import { services } from "../data/services.json"
import { formatDate } from "../helpers"

type FormData = {
    service: string
    price: number
    bookDate: Date
}

type Booking = {
    service: string
    price: number
    bookDate: Date
}[]

export default function BookView() {
    const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormData>()
    const [date, setDate] = useState<Date | null>(null)
    const [booking, setBooking] = useState<Booking>([])
    const total: number = useMemo(() => booking.reduce((acc, service) => acc + service.price, 0), [booking])

    const handleChangeService: ChangeEventHandler<HTMLSelectElement> = (event) => {
        const selectedService = event.target.value
        const service = services.find(service => service.name === selectedService)
        if (service) {
            setValue('service', selectedService)
            setValue('price', service.price)
        }
    }

    const onDateChange: CalendarProps['onChange'] = (value) => {
        const selectedDate = value as Date
        setDate(selectedDate)
        setValue('bookDate', selectedDate)
    }

    const onSubmit: SubmitHandler<FormData> = (data) => {
        setBooking(prevBooking => [...prevBooking, data])
        reset()
        setDate(null)
    }

    const handleConfirmation = () => {
        toast.success('Your booking has been confirmed successfully')
        setBooking([])
    }

    return (
        <section>
            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-6xl text-center font-extrabold text-yellow-300/85 mt-24">Book</h1>
                <p className="text-2xl text-slate-300 font-bold">Checkout our calendar and fill the form to book a date with us!</p>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 my-16 mx-5">
                    <div className="w-96 h-full bg-slate-400 rounded-xl p-4 shadow-md shadow-slate-600">
                        <h2 className="text-2xl font-black p-2 border-b-2 border-slate-900">Price Table</h2>
                        <div className="flex flex-col gap-4 mt-5">
                            {services.map(service => (
                                <div key={service.id} className="flex justify-between">
                                    <p className="font-xl font-medium">{service.name}</p>
                                    <p className="font-xl font-bold text-green-800">${service.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <form
                        className="w-96 flex flex-col bg-slate-400 rounded-xl p-4 space-y-5 shadow-md shadow-slate-600"
                        noValidate
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="flex flex-col gap-2 p-2">
                            <label htmlFor="service" className="text-xl font-medium">Select Service</label>
                            <select
                                id="service"
                                className="w-full p-2 border-0 text-xl text-gray-800 rounded-md shadow-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-400"
                                {...register("service", { required: true })}
                                onChange={handleChangeService}
                            >
                                <option value="">-- Select --</option>
                                {services.map(service => (
                                    <option key={service.id} value={service.name}>{service.name}</option>
                                ))
                                }
                            </select>
                            {errors.service && <p className="font-semibold text-red-700 p-1">* Please select a Service</p>}
                        </div>
                        <div className="flex flex-col flex-1 gap-2 p-2">
                            <label className="text-xl font-medium">Pick the Date:</label>
                            <Calendar onChange={onDateChange} value={date} />
                        </div>
                        <input
                            type="submit"
                            value="Add Service"
                            className="w-full text-xl text-slate-200 font-bold p-2 border border-slate-900 bg-slate-700 rounded-xl hover:bg-green-700 hover:cursor-pointer"
                        />
                    </form>

                    <div className="w-96 flex flex-col bg-slate-400 rounded-xl p-4 shadow-md shadow-slate-600">
                        <h2 className="text-2xl font-black p-2 border-b-2 border-slate-900">Resume:</h2>
                        <div className="flex flex-col flex-1 mt-5">
                            {booking.length === 0 ? (
                                <p className="font-medium text-center">No services selected yet.</p>
                            ) : (
                                <>
                                    {booking.map((service, index) => (
                                        <div key={index} className="flex flex-col border-2 border-slate-900 rounded-lg p-2 shadow-slate-600 shadow-md mb-2">
                                            <p className="font-medium">Service Selected:</p>
                                            <p className="font-bold text-green-800">&#9679; {service.service} ${service.price}</p>
                                            <p className="font-medium mt-2">Date Selected:</p>
                                            <p className="font-bold text-green-800">{formatDate(service.bookDate.toString())} </p>
                                        </div>
                                    ))}
                                    < div className="flex justify-end my-2">
                                        <p className="text-slate-200 text-center font-semibold bg-green-800 p-2 rounded-lg">Total: $<span>{total}</span></p>
                                    </div>
                                </>
                            )}
                        </div>
                        <button
                            type="button"
                            className="w-full text-xl text-slate-200 font-bold p-2 border border-black bg-slate-700 rounded-xl hover:bg-green-700 hover:cursor-pointer"
                            onClick={handleConfirmation}
                        >Confirm Book</button>
                    </div>
                </div>
            </div>

        </section >
    )
}
