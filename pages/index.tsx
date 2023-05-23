import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsWrapper} from '@/components/ConnectedSocialsWrapper';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    return (
        <>
            <h2>Social Network Connections</h2>
            <div className="grid grid-flow-col grid-cols-3 gap-4 auto-cols-max">
                {connectedSocials.length && <ConnectedSocialsWrapper connectedSocials={connectedSocials} />}
                <NotConnectedSocialsList />
            </div>
        </>
    );
}

export default Home;
