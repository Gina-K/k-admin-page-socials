import {useConnectedSocials} from '@/hooks/useConnectedSocials';
import {NotConnectedSocialsList} from '@/components/NotConnectedSocialsList';
import {ConnectedSocialsList} from '@/components/ConnectedSocialsList';

const Home = () => {
    const {connectedSocials} = useConnectedSocials();

    return (
        <>
            <h2>Social Network Connections</h2>
            <ConnectedSocialsList
                connections={connectedSocials}
                onChangeName={() => console.log('changed name')}
                onChangeDescription={() => console.log('changed description')}
            />
            <NotConnectedSocialsList />
        </>
    );
}

export default Home;
