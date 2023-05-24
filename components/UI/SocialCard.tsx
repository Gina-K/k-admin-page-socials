import {ReactNode} from 'react';
import Image from 'next/image';

import {ConnectButton} from '@/components/UI/ConnectButton';
import {DisconnectButton} from '@/components/UI/DisconnectButton';

type Props = {
    socialName: string;
    children?: ReactNode;
}

export const SocialCard = ({children, socialName}: Props) => {
    return (
        <section
            className="basis-64 flex flex-col justify-between min-h-[16rem] overflow-hidden text-gray-600 bg-white border rounded-md m-3 hover:shadow">
            <header className="w-full h-12 m-auto">
                <div className="w-full h-8 mt-3 relative">
                    <Image src={`/logos/${socialName}Logo.png`}
                           alt={`${socialName} logo`}
                           className="object-contain"
                           fill
                    />
                </div>
            </header>
            {children}
            <footer>
                {children ? <DisconnectButton /> : <ConnectButton />}
            </footer>
        </section>
    );
}