import {getSocialNameFromAddressBar} from '@/utils';

const ConnectionDetails = () => {
    const socialName = getSocialNameFromAddressBar();

    return <h2>{socialName} Content Manager</h2>
}

export default ConnectionDetails;