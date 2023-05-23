import type {JSX} from 'react';

type Props = {
    children: JSX.Element[];
}

export const EditableDetails = ({children}: Props) => {
    return (
        <div className="flex flex-row mb-2 text-black">
            {children}
        </div>
    );
}