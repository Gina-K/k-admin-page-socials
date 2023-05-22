import {AVAILABLE_SOCIALS} from '@/pages/constants';
import {NotConnectedSocialItem} from '@/components/NotConnectedSocialItem';

export const NotConnectedSocialsList = () => {
    return (
        <ul>
            {AVAILABLE_SOCIALS.map((social) => (social.isConnected ||
                <NotConnectedSocialItem key={social.id} social={social} />))}
        </ul>
    );
}