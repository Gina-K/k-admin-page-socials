import type {UsersConnectedSocialsList} from '@/types/pages';
import {ConnectedSocialItem} from '@/components/ConnectedSocialItem';

type Props = {
    connections: UsersConnectedSocialsList;
    onChangeName: ({}) => void;
    onChangeNotes: ({}) => void;
};

export const ConnectedSocialsList = ({connections, onChangeName, onChangeNotes}: Props) => {
    return (
        <ul>
            {connections.map((connection) => (
                <li key={connection.id}>
                    <ConnectedSocialItem
                        connection={connection}
                        onChangeName={onChangeName}
                        onChangeNotes={onChangeNotes}
                    />
                </li>
            ))}
        </ul>
    );
};