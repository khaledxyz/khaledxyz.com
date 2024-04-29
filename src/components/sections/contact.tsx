
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { TbBrandTelegram } from 'react-icons/tb';
import { Alert, AlertDescription, AlertTitle } from 'src/components/ui/alert';
import { copyText } from 'src/lib/utils';

export default function Contact() {
    return (
        <section className='mb-10 mt-32'>
            <div className='md:flex text-center items-end gap-2 justify-center mb-10'>
                <h1 className="text-4xl font-medium tracking-tight">Contact me</h1>
                <p className='max-w-[750px] text-lg text-muted-foreground sm:text-xl'>Tell me about your project</p>
            </div>

            <div className='space-x-1 container'>
                <Link href='mailto:me@khaledxyz.com' onClick={() => copyText('me@khaledxyz.com', true)}>
                    <Alert className='hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'>
                        <EnvelopeClosedIcon className="h-4 w-4" />
                        <AlertTitle>Email</AlertTitle>
                        <AlertDescription>me@khaledxyz.com</AlertDescription>
                    </Alert>
                </Link>
                <Link href='https://web.whatsapp.com/send/?phone=+213668579088' target='_blank'>
                    <Alert className='hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'>
                        <BsWhatsapp className="h-4 w-4" />
                        <AlertTitle>WhatsApp</AlertTitle>
                        <AlertDescription>+213 668 57 90 88</AlertDescription>
                    </Alert>
                </Link>
                <Link href='https://t.me/+213668579088' target='_blank'>
                    <Alert className='hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer'>
                        <TbBrandTelegram className="h-4 w-4" />
                        <AlertTitle>Telegram</AlertTitle>
                        <AlertDescription>+213 668 57 90 88</AlertDescription>
                    </Alert>
                </Link>
            </div>

        </section>
    );
}