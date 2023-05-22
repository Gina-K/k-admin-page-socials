import type {UsersConnectedSocialsList} from '@/types/pages';
import {ConnectedSocialItem} from '@/components/ConnectedSocialItem';

type Props = {
    connections: UsersConnectedSocialsList;
    onChangeName: ({}) => void;
    onChangeDescription: ({}) => void;
};

export const ConnectedSocialsList = ({connections, onChangeName, onChangeDescription}: Props) => {
    return (
        <ul>
            {connections.map((connection) => (
                <li key={connection.id}>
                    <ConnectedSocialItem
                        connection={connection}
                        onChangeName={onChangeName}
                        onChangeDescription={onChangeDescription}
                    />
                </li>
            ))}
        </ul>
    );
};