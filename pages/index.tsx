import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsWrapper} from '@/components/ConnectedSocialsWrapper';
import {SocialCardsContainer} from '@/components/UI/SocialCardsContainer';
import {Layout} from '@/components/Layout';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    return (
        <Layout pageTitle="Social Network Connections">
            <h1
                className="text-center text-2xl font-light text-gray-600 tracking-wide m-2"
            >
                Connect your Social Networks to import the content
            </h1>
            <SocialCardsContainer>
                {connectedSocials.length && <ConnectedSocialsWrapper connectedSocials={connectedSocials} />}
                <NotConnectedSocialsList />
            </SocialCardsContainer>
        </Layout>
    );
}

export default Home;
