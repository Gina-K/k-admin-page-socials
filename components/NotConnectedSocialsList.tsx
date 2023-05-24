import {SocialCard} from '@/components/UI/SocialCard';
import type {AvailableSocialConnectionsList} from '@/types/general';

type Props = {
    notConnectedSocials: AvailableSocialConnectionsList;
}

export const NotConnectedSocialsList = ({notConnectedSocials}: Props) => {
    return (
        <>
            {notConnectedSocials.map((social) =>
                (
                    <SocialCard key={social.id} socialName={social.name} />
                )
            )}
        </>
    );
}