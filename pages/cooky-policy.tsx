import Head from "next/head";
import { FC } from "react";
import Footer from "../core/components/footer";
import Header from "../core/components/header";

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

        <div className="m-4">

          <p className="pt-8 pb-8">We gebruiken geen cookies om je te tracken, enkel technische cookies.</p>
          
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Naam</th>
                <th className="px-4 py-2">Doel</th>
                <th className="px-4 py-2">Website</th>
                <th className="px-4 py-2">Geldigheid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">ARRAfinity</td>
                <td className="border px-4 py-2">Sessie cookie voor meetnet data</td>
                <td className="border px-4 py-2">.meetnetvlaamsebanken.be</td>
                <td className="border px-4 py-2">session</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border px-4 py-2">meetnetAccessToken</td>
                <td className="border px-4 py-2">Authenticatie token voor meetnet data</td>
                <td className="border px-4 py-2">portdebruges.eu</td>
                <td className="border px-4 py-2">1 uurtje</td>
              </tr>
            </tbody>
          </table>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default CookyPolicyPage;