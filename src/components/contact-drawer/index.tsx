import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import Link from "next/link";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { Button } from "../ui/button";
import { copyText } from "src/lib/utils";

export default function ContactDrawer() {

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button className='w-full' variant="outline">Contact</Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-sm h-96'>
                    <DrawerHeader>
                        <DrawerTitle>Contact me</DrawerTitle>
                        <DrawerDescription>Tell me about your project.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0 flex flex-col gap-2">
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
                    <DrawerFooter>
                        <DrawerClose><Button className='w-full'>Close</Button></DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}