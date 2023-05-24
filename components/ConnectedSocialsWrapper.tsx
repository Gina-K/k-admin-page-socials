import {useState} from 'react';

import {ConnectedSocialsList} from '@/components/ConnectedSocialsList';
import type {UsersConnectedSocial, UsersConnectedSocialsList} from '@/types/general';

type Props = {
    connectedSocials: UsersConnectedSocialsList;
}

export const ConnectedSocialsWrapper = ({connectedSocials}: Props) => {
    const [connections, setConnections] = useState<UsersConnectedSocialsList>(connectedSocials);

    const handleChange = (changedConnection: UsersConnectedSocial) => {
        setConnections(connections.map((oldConnection) =>
            (oldConnection.id === changedConnection.id ? changedConnection : oldConnection)
        ));
    }

    return (
        <ConnectedSocialsList
            connections={connections}
            onChange={handleChange}
        />
    );
}