import Head from 'next/head';

import { FC, useState } from 'react';

import Header from '../core/components/header';
import Footer from '../core/components/footer';
import MeetnetComponent from '../meetnet/components/meetnetComponent';
import Error from '../core/components/error';

type Props = {
}

export const Home: FC<Props> = () => {
  const [ error, setError ] = useState<string>();

  return (
    <>
      <Head>
        <title>It's on? Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="xl:container xl:mx-auto p-4">
        {error && <Error title="Holy smokes!" description={error} />}
        
        <Header  />

        <MeetnetComponent setError={setError} />
 
        <Footer />
      </div>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const accessToken = await getAccessToken();

//   return {
//     props: {
//       accessToken,
//     },
//     revalidate: 60 * 55, // access tokens are valid for an hour, so we cache for 55 minutes 😁
//   }
// }

export default Home;
