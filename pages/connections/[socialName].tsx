import {getSocialNameFromAddressBar} from '@/utils';
import {Layout} from '@/components/Layout';

const ConnectionDetails = () => {
    const socialName = getSocialNameFromAddressBar();
    const title = `${socialName} Content Manager`;

    return (
        <Layout pageTitle={title}>
            <h2>{title}</h2>
        </Layout>
    );
}

export default ConnectionDetails;