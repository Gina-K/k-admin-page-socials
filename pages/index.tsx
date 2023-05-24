import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsWrapper} from '@/components/ConnectedSocialsWrapper';
import {SocialCardsContainer} from '@/components/UI/SocialCardsContainer';
import {Layout} from '@/components/Layout';
import {useAvailableSocials} from '@/hooks/useAvailableSocials';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();
    const {availableSocials} = useAvailableSocials();

    const notConnectedSocials = availableSocials.filter((available) => {
        return !connectedSocials.some((connected) => (available.id === connected.id));
    });

    return (
        <Layout pageTitle="Social Network Connections">
            <h1
                className="text-center text-2xl font-light text-gray-600 tracking-wide m-2"
            >
                Connect your Social Networks to import the content
            </h1>
            <SocialCardsContainer>
                {!!connectedSocials.length && <ConnectedSocialsWrapper connectedSocials={connectedSocials} />}
                <NotConnectedSocialsList notConnectedSocials={notConnectedSocials} />
            </SocialCardsContainer>
        </Layout>
    );
}

export default Home;
