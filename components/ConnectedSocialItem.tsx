import type {UsersConnectedSocial} from '@/types/pages';

type Props = {
    social: UsersConnectedSocial;
}

export const ConnectedSocialItem = ({social}: Props) => {
    return (
        <li>
            <input value={social.displayName} />
            <input type="button" value="Edit" />
            <p>{social.socialName}</p>
            <p>{social.accountName}</p>
            <p>Connected: {social.connectionDate}</p>
            <textarea placeholder="Notes"/>
            <input type="button" value="Disconnect" />
        </li>

    );
}