import Layout from '../components/layout';
import Head from 'next/head';

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>404</title>
            </Head>
            <div className="404-error">
                <h1>404 - Page Not Found</h1>
            </div>
        </Layout>
    )
}