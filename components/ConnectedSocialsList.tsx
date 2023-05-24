import type {UsersConnectedSocial, UsersConnectedSocialsList} from '@/types/general';
import {ConnectedSocialItem} from '@/components/ConnectedSocialItem';
import {SocialCard} from '@/components/UI/SocialCard';

type Props = {
    connections: UsersConnectedSocialsList;
    onChange: (connection: UsersConnectedSocial) => void;
};

export const ConnectedSocialsList = ({connections, onChange}: Props) => {
    return (
        <>
            {connections.map((connection) => (
                <SocialCard key={connection.id} socialName={connection.socialName}>
                    <ConnectedSocialItem
                        connection={connection}
                        onChange={onChange}
                    />
                </SocialCard>
            ))}
        </>
    );
};