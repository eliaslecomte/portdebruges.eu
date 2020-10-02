import Head from 'next/head';
import MeetnetComponent from '../meetnet/components/meetnetComponent';
import Error from '../core/components/error';
import useSWR from 'swr'
import { parseCookies, setCookie } from 'nookies'

import { getCurrentMeetnetData, refreshAccessToken } from '../meetnet/api';

import { FC, useEffect } from 'react';
import Header from '../core/components/header';
import Footer from '../core/components/footer';
import { AuthenticationError } from '../meetnet/api/errors';

type Props = {
}

export const Home: FC<Props> = () => {
  const meetnetAccessTokenFromCookie = parseCookies().meetnetAccessToken;

  // TODO: store these keys with the api methods
  // or move the useSWR to the api layer completely
  const { data: meetnetAccessTokenResponse, error, mutate: refreshMeetnetAccessToken } = useSWR('meetnet/accessToken', refreshAccessToken, {
    revalidateOnReconnect: false,
    revalidateOnFocus: false,
    initialData: meetnetAccessTokenFromCookie ? {
      accessToken: meetnetAccessTokenFromCookie
    } : undefined,
  });
  // https://swr.vercel.app/docs/conditional-fetching
  const { data: currentMeetnetData, error: meetnetApiError } = useSWR(meetnetAccessTokenResponse ? [ 'meetnet/currentMeetnetData', meetnetAccessTokenResponse.accessToken ] : null, (url: string ,accessToken: string) => getCurrentMeetnetData(accessToken), { refreshInterval: 60 * 1000 });
  
  useEffect(() => {
    if (meetnetApiError instanceof AuthenticationError) {
      refreshMeetnetAccessToken();
    }
  }, [meetnetApiError]);

  useEffect(() => {
    if (meetnetAccessTokenResponse?.accessToken && meetnetAccessTokenResponse?.accessToken !== meetnetAccessTokenFromCookie) {
      setCookie(null, 'meetnetAccessToken', meetnetAccessTokenResponse.accessToken, {
        maxAge: 60 * 60, // meetnet access tokens expire after 1 hour
        path: '/',
      });
    }
    
  }, [meetnetAccessTokenResponse]);

  return (
    <>
      <Head>
        <title>It's on? Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="xl:container xl:mx-auto p-4">
        {meetnetApiError && <Error title="Holy smokes!" description="Er ging iets  is met data opvragen van meetnet" />}
        
        <Header  />

        <MeetnetComponent currentMeetnetData={currentMeetnetData} />
 
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
