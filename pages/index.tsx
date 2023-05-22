import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {ConnectedSocialItem} from '@/components/ConnectedSocialItem';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    const connectedSocialsList = connectedSocials && connectedSocials.map((connection) => <ConnectedSocialItem key={connection.id} social={connection} />);

    return (
        <>
            <h2>Social Network Connections</h2>
            <ul>
                {connectedSocialsList}
            </ul>
            <NotConnectedSocialsList />
        </>
    );
}

export default Home;
