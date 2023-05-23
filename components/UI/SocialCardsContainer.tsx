import {ReactNode} from 'react';

type Props = {
    children: ReactNode[]
}

export const SocialCardsContainer = ({children}: Props) => {
    return (
        <div className="flex flex-row flex-wrap justify-center font-sans">
            {children}
        </div>
    );
}