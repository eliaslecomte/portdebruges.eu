import Head from 'next/head';

import { FC, useState } from 'react';

import Header from '../core/components/header';
import Footer from '../core/components/footer';
import MeetnetComponent from '../meetnet/components/meetnetComponent';
import Error from '../core/components/alerts/error';
import Warning from '../core/components/alerts/warning';
import { getCurrentWeather } from '../openWeather/api/serverSide';
import type { currentWeatherResponse } from '../openWeather/api/serverSide';
import type { GetStaticProps } from 'next';
import OpenWeatherComponent from '../openWeather/components/openWeatherComponent';

type Props = {
  currentWeather: currentWeatherResponse;
}

export const Home: FC<Props> = ( { currentWeather }) => {
  const [ error, setError ] = useState<string>();
  const [ warning, setWarning ] = useState<string>();

  return (
    <>
      <Head>
        <title>It's on? Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="xl:container xl:mx-auto p-4">
        {error ? <Error description={error} /> : null}
        {warning ? <Warning description={warning} /> : null}
        
        <Header  />

        <MeetnetComponent
          setError={setError} 
          setWarning={setWarning} />

        <OpenWeatherComponent currentWeather={currentWeather} />
 
        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const currentWeather = await getCurrentWeather();

  return {
    props: {
      currentWeather,
    },
    revalidate: 60 * 60, // update weather news every hour
  }
}

export default Home;
