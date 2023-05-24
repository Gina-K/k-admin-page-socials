import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {Layout} from '@/components/Layout';
import {useAvailableSocials} from '@/hooks/useAvailableSocials';
import {ConnectedSocialsList} from '@/components/ConnectedSocialsList';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();
    const {availableSocials} = useAvailableSocials();

    const notConnectedSocials = availableSocials.filter((available) => {
        return !connectedSocials.some((connected) => (available.id === connected.id));
    });

    return (
        <Layout pageTitle="Social Network Connections">
            <h1
                className="text-center text-2xl font-light text-gray-600 tracking-wide mt-5 mb-2"
            >
                Connect your Social Networks to import the content
            </h1>
            <div className="flex flex-row flex-wrap justify-center font-sans">
                {!!connectedSocials.length && <ConnectedSocialsList connectedSocials={connectedSocials} />}
                <NotConnectedSocialsList notConnectedSocials={notConnectedSocials} />
            </div>
        </Layout>
    );
}

export default Home;
