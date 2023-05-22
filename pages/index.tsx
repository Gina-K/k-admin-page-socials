import {AVAILABLE_SOCIALS} from '@/pages/constants';
import {SocialConnectionsItem} from '@/components/SocialConnectionsItem';

const Home = () => {
    const socialConnectionsList = AVAILABLE_SOCIALS.map((social) => (
        <SocialConnectionsItem key={social.id} social={social} />));

    return (
        <>
            <h2>Social Network Connections</h2>
            <ul>
                {socialConnectionsList}
            </ul>
        </>
    );
}

export default Home;
