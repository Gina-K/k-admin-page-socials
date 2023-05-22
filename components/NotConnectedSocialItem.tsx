import type {AvailableSocialConnection} from '@/types/pages';

type Props = {
    social: AvailableSocialConnection;
}

export const NotConnectedSocialItem = ({social}: Props) => {
    return (
        <li>
            <span>{social.name}</span>
            <button onClick={() => alert('Social connections was not implemented')}>
                Connect
            </button>
        </li>

    );
}