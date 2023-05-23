import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsWrapper} from '@/components/ConnectedSocialsWrapper';
import {SocialCardsContainer} from '@/components/UI/SocialCardsContainer';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    return (
        <>
            <h2>Social Network Connections</h2>
            <SocialCardsContainer>
                {connectedSocials.length && <ConnectedSocialsWrapper connectedSocials={connectedSocials} />}
                <NotConnectedSocialsList />
            </SocialCardsContainer>
        </>
    );
}

export default Home;
