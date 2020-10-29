import { FC } from "react";
import Head from "next/head";

import Table from "../core/components/structure/table";
import Footer from "../core/components/footer";
import Header from "../core/components/header";
import Block from "../core/components/structure/block";
import Page from "../core/components/structure/page";

const CookyPolicyPage: FC = () => {
  return (
    <>
      <Head>
        <title>Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page
        description="We gebruiken geen cookies om je te tracken, enkel technische cookies 🍪.">

        <div className="grid grid-cols-1 sm:grid-cols-2">

          <Block
            title="meetnetAccessToken"
            description="Authenticatie token voor meetnet data."
            showDescriptionMobile>
              <Table values={[
                { title: 'Domein', description: <p>portdebruges.eu</p> },
                { title: 'Duur', description: <p>1 uurtje</p> },
              ]} />
            </Block>

          <Block
            title="ARRAfinity"
            description="Sessie cookie voor meetnet data."
            showDescriptionMobile>
              <Table values={[
                { title: 'Domein', description: <p>.meetnetvlaamsebanken.be</p> },
                { title: 'Duur', description: <p>Sessie</p> },
              ]} />
            </Block>

        </div>

      </Page>
    </>
  );
}

export default CookyPolicyPage;