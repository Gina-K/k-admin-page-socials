import {AVAILABLE_SOCIALS} from '@/pages/constants';
import {SocialCard} from '@/components/UI/SocialCard';

export const NotConnectedSocialsList = () => {
    return (
        <>
            {AVAILABLE_SOCIALS.map((social) => (social.isConnected ||
                <SocialCard key={social.id} socialName={social.name} />))}
        </>
    );
}