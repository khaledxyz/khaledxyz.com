'use client'
import { Form } from "./components/form"

export default function Guestbook() {
    return (
        <div>
            <div className='md:flex text-center items-end gap-2 justify-center mb-10'>
                <h1 className="text-4xl font-medium tracking-tight">Guestbook</h1>
                <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>leave your mark here</p>
            </div>

            <Form />
        </div>
    )
}