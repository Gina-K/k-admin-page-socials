import {useState} from 'react';
import Link from 'next/link';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFloppyDisk, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

import type {UsersConnectedSocial} from '@/types/general';
import {dateNow, updateSocialData} from '@/utils';
import {RoundIconButton} from '@/components/UI/RoundIconButton';

type Props = {
    connection: UsersConnectedSocial;
    onChange: (connection: UsersConnectedSocial) => void;
}

export const ConnectedSocialDetails = ({connection, onChange}: Props) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleSave = () => {
        setIsEditing(false);
        updateSocialData({...connection, modified: dateNow});
    }

    let editableDetails;

    if (isEditing) {
        editableDetails = (
            <div className="flex flex-row mb-2 text-black grow">
                <div className="grow">
                    <input
                        value={connection.displayName}
                        maxLength={25}
                        className="appearance-none border rounded w-full py-1 px-1 font-normal leading-none
                                   focus:outline-none focus:shadow-outline focus:border-indigo-500"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            onChange({
                                ...connection,
                                displayName: e.target.value
                            });
                        }}
                    />
                    <textarea
                        placeholder="Notes"
                        value={connection.notes}
                        maxLength={150}
                        className="appearance-none border rounded w-full py-1 px-1 italic leading-none
                                   focus:outline-none focus:shadow-outline focus:border-indigo-500"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                            onChange({
                                ...connection,
                                notes: e.target.value
                            });
                        }}
                    />
                </div>
                <RoundIconButton
                    onClick={handleSave}
                    title="Save changes"
                >
                    <FontAwesomeIcon icon={faFloppyDisk} />
                </RoundIconButton>
            </div>
        );
    } else {
        editableDetails = (
            <div className="flex flex-row mb-2 text-black grow">
                <div className="grow">
                    <p className="font-normal">{connection.displayName}</p>
                    <p className="italic">{connection.notes}</p>
                </div>
                <RoundIconButton
                    onClick={() => setIsEditing(true)}
                    title="Edit Title and add Notes"
                >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </RoundIconButton>
            </div>
        )
        ;
    }

    return (
        <div className='grow m-2 flex flex-col text-sm font-extralight'>
            {editableDetails}
            <p>Username: {connection.accountName}</p>
            <p>Connected: {connection.connectionDate}</p>
            <Link href={`/connections/${connection.socialName}`} className="self-center">
                <button
                    className="items-end py-2 px-4 mb-2 mt-4 font-normal text-white rounded-full
                               bg-gradient-to-r from-indigo-500 to-indigo-600
                               hover:from-indigo-400 hover:to-indigo-500"
                >
                    Manage content
                </button>
            </Link>
        </div>
    );
}