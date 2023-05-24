import {getSocialNameFromAddressBar} from '@/utils';
import {Layout} from '@/components/Layout';

const ConnectionDetails = () => {
    const socialName = getSocialNameFromAddressBar();
    const title = `${socialName} Content Manager`;

    return (
        <Layout pageTitle={title}>
            <h1
                className="text-center text-2xl font-light text-gray-600 tracking-wide m-2"
            >
                {`Manage and share your ${socialName} content`}
            </h1>
        </Layout>
    );
}

export default ConnectionDetails;