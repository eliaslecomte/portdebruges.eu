import Head from "next/head";
import { FC } from "react";
import Table from "../core/components/content-structures/table";
import Footer from "../core/components/footer";
import Header from "../core/components/header";
import Block from "../core/components/structure/block";

const CookyPolicyPage: FC = () => {
  return (
    <>
      <Head>
        <title>It's on? Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="xl:container xl:mx-auto p-4">

        <Header  />

        <p className="p-8">We gebruiken geen cookies om je te tracken, enkel technische cookies 🍪.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2">

          <Block
            title="meetnetAccessToken"
            descriptions={[
              {
                content: <>Authenticatie token voor meetnet data.</>
              }
            ]}>
              <Table values={[
                { title: 'Domein', description: <p>portdebruges.eu</p> },
                { title: 'Duur', description: <p>1 uurtje</p> },
              ]} />
            </Block>

          <Block
            title="ARRAfinity"
            descriptions={[
              {
                content: <>Sessie cookie voor meetnet data.</>
              }
            ]}>
              <Table values={[
                { title: 'Domein', description: <p>.meetnetvlaamsebanken.be</p> },
                { title: 'Duur', description: <p>Sessie</p> },
              ]} />
            </Block>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default CookyPolicyPage;