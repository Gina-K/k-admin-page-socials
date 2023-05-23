import type {UsersConnectedSocialsList} from '@/types/pages';
import {ConnectedSocialItem} from '@/components/ConnectedSocialItem';
import {SocialCard} from '@/components/UI/SocialCard';

type Props = {
    connections: UsersConnectedSocialsList;
    onChangeName: ({}) => void;
    onChangeNotes: ({}) => void;
};

export const ConnectedSocialsList = ({connections, onChangeName, onChangeNotes}: Props) => {
    return (
        <>
            {connections.map((connection) => (
                <SocialCard key={connection.id} socialName={connection.socialName}>
                    <ConnectedSocialItem
                        connection={connection}
                        onChangeName={onChangeName}
                        onChangeNotes={onChangeNotes}
                    />
                </SocialCard>
            ))}
        </>
    );
};