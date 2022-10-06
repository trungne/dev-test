import Menu from "components/Dashboard"
import { NextPage } from "next"
import Head from "next/head"

const Dashboard: NextPage = () => {

    return (
        <>
            <Head>
                <title>UCar - Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Menu />
            </main>
        </>
    )
}

export default Dashboard
