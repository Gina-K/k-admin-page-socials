import type {ReactNode} from 'react';

type Props = {
    children: ReactNode;
    onClick: () => void;
    title: string;
}

export const RoundIconButton = ({children, onClick, title}: Props) => {
    return (
        <button
            onClick={onClick}
            title={title}
            className="self-start justify-self-end text-indigo-500 border border-indigo-500/10 rounded-full p-2.5
                       text-center inline-flex items-center hover:bg-indigo-500/10"
        >
            {children}
        </button>
    );
}