import type {ReactNode} from 'react';
import Head from 'next/head';

type Props = {
    children: ReactNode;
    pageTitle: string;
}

export const Layout = ({children, pageTitle}: Props) => {
    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Take home assignment. Socials cection of Admin panel"
                />
                <meta name="og:title" content={pageTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header className="fixed top-0 z-50 w-full h-14 bg-gray-300 border-b border-gray-200"></header>

            <main className="h-screen pl-64 pt-14 bg-gray-50">{children}</main>

            <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-gray-300 border-r border-gray-200"></aside>
        </div>
    );
}