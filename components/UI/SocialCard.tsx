import {ReactNode} from 'react';
import {ConnectButton} from '@/components/UI/ConnectButton';
import {DisconnectButton} from '@/components/UI/DisconnectButton';
import Image from 'next/image';

type Props = {
    socialName: string;
    children?: ReactNode;
}

export const SocialCard = ({children, socialName}: Props) => {
    return (
        <section className="basis-60 flex flex-col justify-between overflow-hidden border rounded-md m-3 hover:shadow">
            <header className="w-full h-12">
                <div className="w-full h-8 mx-auto mt-3 relative">
                    <Image src={`/logos/${socialName}Logo.png`} alt={`${socialName} logo`} fill className="object-contain"/>
                </div>
            </header>
            {children}
            <footer>
                {children ? <DisconnectButton /> : <ConnectButton />}
            </footer>
        </section>
    );
}