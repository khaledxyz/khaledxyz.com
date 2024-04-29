'use client'
import { useFormStatus, useFormState } from "react-dom";
import { signBook } from "src/app/actions";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";

const initialState = {
    name: '',
    message: '',
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (<Button disabled={pending} aria-disabled={pending} type="submit">Sign</Button>)
}

export function Form() {
    const [state, formAction] = useFormState(signBook, initialState);

    return (
        <form action={formAction} className="max-w-96 mx-auto space-y-2">
            <Input required placeholder="Message" name="message" />
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input required placeholder="Name" name="name" />
                <SubmitButton />
            </div>
        </form>

    )
}