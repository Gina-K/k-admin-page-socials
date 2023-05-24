import type {UsersConnectedSocial, UsersConnectedSocialsList} from '@/types/general';
import {ConnectedSocialDetails} from '@/components/ConnectedSocialDetails';
import {SocialCard} from '@/components/UI/SocialCard';
import {useState} from 'react';

type Props = {
    connectedSocials: UsersConnectedSocialsList;
};

export const ConnectedSocialsList = ({connectedSocials}: Props) => {
    const [connections, setConnections] = useState<UsersConnectedSocialsList>(connectedSocials);

    const handleChange = (changedConnection: UsersConnectedSocial) => {
        setConnections(connections.map((oldConnection) =>
            (oldConnection.id === changedConnection.id ? changedConnection : oldConnection)
        ));
    }

    return (
        <>
            {connections.map((connection) => (
                <SocialCard key={connection.id} socialName={connection.socialName}>
                    <ConnectedSocialDetails
                        connection={connection}
                        onChange={handleChange}
                    />
                </SocialCard>
            ))}
        </>
    );
};