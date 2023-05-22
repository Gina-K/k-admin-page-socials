import type {AvailableSocialConnection} from '@/types/pages';

type Props = {
    social: AvailableSocialConnection;
}

export const SocialConnectionsItem = ({social}: Props) => {
    return (
        <li>
            <span>{social.name}</span>
            <input type="button" value={social.isConnected ? "Disconnect" : "Connect"} />
        </li>

    );
}