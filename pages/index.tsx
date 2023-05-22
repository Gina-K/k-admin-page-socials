import {AVAILABLE_SOCIALS} from '@/pages/constants';
import {NotConnectedSocialItem} from '@/components/NotConnectedSocialItem';
import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {ConnectedSocialItem} from '@/components/ConnectedSocialItem';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    const notConnectedSocialList = AVAILABLE_SOCIALS.map((social) => (
        social.isConnected || <NotConnectedSocialItem key={social.id} social={social} />));

    const connectedSocialsList = connectedSocials && connectedSocials.map((connection) => <ConnectedSocialItem key={connection.id} social={connection} />);

    return (
        <>
            <h2>Social Network Connections</h2>
            <ul>
                {connectedSocialsList}
                {notConnectedSocialList}
            </ul>
        </>
    );
}

export default Home;
