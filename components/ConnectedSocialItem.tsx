import type {UsersConnectedSocial} from '@/types/pages';
import {useState} from 'react';
import {dateNow, updateSocialData} from '@/utils';
import Link from 'next/link';
import {EditableDetails} from '@/components/UI/EditableDetails';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFloppyDisk, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import {RoundIconButton} from '@/components/UI/RoundIconButton';

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
            <EditableDetails>
                <div className="grow">
                    <input
                        value={connection.displayName}
                        maxLength={25}
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
                        maxLength={150}
                        onChange={e => {
                            onChangeNotes({
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
            </EditableDetails>
        );
    } else {
        editableDetails = (
            <EditableDetails>
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
            </EditableDetails>
        )
        ;
    }

    return (
        <div
            className='grow m-2 text-sm font-extralight'
        >
            {editableDetails}
            <p>Username: {connection.accountName}</p>
            <p>Connected: {connection.connectionDate}</p>
            <Link href={`/connections/${connection.socialName}`}>Content Manager</Link>
        </div>

    );
}