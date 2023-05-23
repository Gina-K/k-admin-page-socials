import {ReactNode} from 'react';
import {ConnectButton} from '@/components/UI/ConnectButton';
import {DisconnectButton} from '@/components/UI/DisconnectButton';

type Props = {
    socialName: string;
    children?: ReactNode;
}

export const SocialCard = ({children, socialName}: Props) => {
    return (
        <section className="flex flex-col justify-between overflow-hidden border rounded-md hover:shadow">
            <header>{socialName} Logo</header>
            {children}
            <footer>
                {children ? <DisconnectButton /> : <ConnectButton />}
            </footer>
        </section>
    );
}