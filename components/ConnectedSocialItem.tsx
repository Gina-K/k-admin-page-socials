import type {UsersConnectedSocial} from '@/types/pages';
import {useState} from 'react';
import {dateNow, updateSocialData} from '@/utils';
import Link from 'next/link';

type Props = {
    connection: UsersConnectedSocial;
    onChangeName: ({}) => void;
    onChangeNotes: ({}) => void;
}

export const ConnectedSocialItem = ({connection, onChangeName, onChangeNotes}: Props) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = () => {
        setIsEditing(false);
        updateSocialData({...connection, modified: dateNow});
    }

    let editableDetails;

    if (isEditing) {
        editableDetails = (
            <>
                <input
                    value={connection.displayName}
                    onChange={e => {
                        onChangeName({
                            ...connection,
                            displayName: e.target.value
                        });
                    }}
                />
                <textarea
                    placeholder="Notes"
                    value={connection.notes}
                    onChange={e => {
                        onChangeNotes({
                            ...connection,
                            notes: e.target.value
                        });
                    }}
                />
                <button onClick={handleSave}>
                    Save
                </button>
            </>
        );
    } else {
        editableDetails = (
            <>
                {connection.displayName}
                {connection.notes}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <>
            {editableDetails}
            <p>{connection.socialName}</p>
            <p>{connection.accountName}</p>
            <p>Connected: {connection.connectionDate}</p>
            <Link href={`/connections/${connection.socialName}`}>Content Manager</Link>
        </>

    );
}