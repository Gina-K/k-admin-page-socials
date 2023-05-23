import {ReactNode} from 'react';

type Props = {
    socialName: string;
    children?: ReactNode;
}

export const SocialCard = ({children, socialName}: Props) => {
    return (
        <section className="border-2">
            <header>{socialName} Logo</header>
            {children}
            <footer>
                <button onClick={() => alert('Social connections was not implemented')}>
                    {children ? 'Disconnect 💔' : 'Conect'}
                </button>
            </footer>
        </section>
    );
}