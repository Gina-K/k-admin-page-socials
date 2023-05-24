import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsWrapper} from '@/components/ConnectedSocialsWrapper';
import {SocialCardsContainer} from '@/components/UI/SocialCardsContainer';
import {Layout} from '@/components/Layout';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    return (
        <Layout pageTitle="Social Network Connections">
            <h2>Social Network Connections</h2>
            <SocialCardsContainer>
                {connectedSocials.length && <ConnectedSocialsWrapper connectedSocials={connectedSocials} />}
                <NotConnectedSocialsList />
            </SocialCardsContainer>
        </Layout>
    );
}

export default Home;
