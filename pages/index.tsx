import Head from 'next/head';

import { FC, useState } from 'react';

import MeetnetComponent from '../meetnet/components/meetnetComponent';
import Error from '../core/components/alerts/error';
import Warning from '../core/components/alerts/warning';
import { getCurrentWeather, getThreeHourlyWeather } from '../openWeather/api/serverSide';
import type { InferGetStaticPropsType } from 'next';
import OpenWeatherComponent from '../openWeather/components/currentWeatherComponent';
import ThreeHourlyWeatherComponent from '../openWeather/components/threeHourlyWeatherComponent';
import Page from '../core/components/structure/page';
import { getSuperforecasts } from '../windfinder/api/serverSide';
import WindfinderComponent from '../windfinder/components/windfinderComponent';

export const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ currentWeather, threeHourlyWeather, superforecast }) => {
  const [ error, setError ] = useState<string>();
  const [ warning, setWarning ] = useState<string>();

  return (
    <>
      <Head>
        <title>It's on? Kitesurf weer uit Zeebrugge!</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />

        <script async defer data-domain="portdebruges.eu" src="https://stats.createweb.be/js/plausible.js"></script>
      </Head>

      <Page
        topComponent={
          <>
            {error ? <Error description={error} /> : null}
            {warning ? <Warning description={warning} /> : null}  
          </>
        }>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" >

          <MeetnetComponent
            setError={setError} 
            setWarning={setWarning} />

          <WindfinderComponent
            superforecast={superforecast} />

          <OpenWeatherComponent currentWeather={currentWeather} />

          <ThreeHourlyWeatherComponent threeHourlyWeather={threeHourlyWeather} />

        </div>

      </Page>
    </>
  )
}

export const getStaticProps = async () => {

  const [ currentWeather, threeHourlyWeather, superforecast ]= await Promise.all([
    getCurrentWeather(),
    getThreeHourlyWeather(),
    getSuperforecasts(),
  ]);

  return {
    props: {
      currentWeather,
      threeHourlyWeather,
      superforecast,
    },
    revalidate: 60 * 60, // update weather news every hour
  }
}

export default Home;
