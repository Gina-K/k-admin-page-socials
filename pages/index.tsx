import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsWrapper} from '@/components/ConnectedSocialsWrapper';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    return (
        <>
            <h2>Social Network Connections</h2>
            {connectedSocials.length && <ConnectedSocialsWrapper connectedSocials={connectedSocials} />}
            <NotConnectedSocialsList />
        </>
    );
}

export default Home;
