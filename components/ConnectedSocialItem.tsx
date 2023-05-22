import type {UsersConnectedSocial} from '@/types/pages';
import {useState} from 'react';

type Props = {
    connection: UsersConnectedSocial;
    onChangeName: ({}) => void;
    onChangeDescription: ({}) => void;
}

export const ConnectedSocialItem = ({connection, onChangeName, onChangeDescription}: Props) => {
    const [isEditing, setIsEditing] = useState(false);

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
                        onChangeDescription({
                            ...connection,
                            notes: e.target.value
                        });
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
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
            <button onClick={() => alert('Social connections was not implemented')}>
                Disconnect
            </button>
        </>

    );
}