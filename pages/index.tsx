import Head from 'next/head';
import Link from 'next/link';
import MeetnetComponent from '../meetnet/components/meetnetComponent';
import Error from '../core/components/error';
import useSWR from 'swr'

import { currentMeetnetData, getCurrentMeetnetData, getNewAccessToken } from '../meetnet/api';

import type { GetServerSidePropsContext, GetServerSideProps, GetStaticProps } from 'next'

import type { FC } from 'react';


type Props = {
  accessToken: string,
}

export const Home: FC<Props> = ({ accessToken }) => {
  // https://swr.vercel.app/docs/conditional-fetching
  const { data: currentMeetnetData, error: meetnetApiError } = useSWR(accessToken ? 'meetnet/currentMeetnetData' : null, () => getCurrentMeetnetData(accessToken), { refreshInterval: 60 * 1000 });
  
  // would we ever want to store the access token in a cookie?
  // or just cache the accesstoken serverside?
  // cookie information https://github.com/maticzav/nookies

  return (
    <>
      <Head>
        <title>It's on? Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="xl:container xl:mx-auto p-4">
        {meetnetApiError && <Error title="Holy smokes!" description="Er ging iets  is met data opvragen van meetnet" />}

        <div className="mb-4 p-4">
          <h1>Welkom op <Link href="/"><a>Portdebruges.eu!</a></Link></h1>
          <p>
            Beste kitesurf weer uit Zeebrugge sinds <code>26/09/2020</code>.
          </p>
        </div>

        <MeetnetComponent currentMeetnetData={currentMeetnetData} />

        <div className="mt-4 p-4 flex content-center">
          <img
            alt="Createweb.be"
            src="/createweb_small.png"
            width="35"
            height="35" />
          <Link href="https://createweb.be"><a className="p-1" target="_blank">Made by Createweb.be</a></Link>
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const accessToken = await getNewAccessToken();

  return {
    props: {
      accessToken,
    },
    revalidate: 60 * 45, // access tokens are validd for an hour, so cache for 45 minutes
  }
}

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   const accessToken = await getNewAccessToken();

//   return {
//     props: {
//       accessToken,
//     },
//   };
// }

export default Home;
