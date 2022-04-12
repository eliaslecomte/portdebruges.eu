import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { FC, useState } from 'react';

import Error from '../core/components/alerts/error';
import Warning from '../core/components/alerts/warning';
import Page from '../core/components/structure/page';
import MeetnetComponent from '../meetnet/components/meetnetComponent';
import { getCurrentWeather, getThreeHourlyWeather } from '../openWeather/api/serverSide';
import OpenWeatherComponent from '../openWeather/components/currentWeatherComponent';
import ThreeHourlyWeatherComponent from '../openWeather/components/threeHourlyWeatherComponent';

export const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  currentWeather,
  threeHourlyWeather,
}) => {
  const [error, setError] = useState<string>();
  const [warning, setWarning] = useState<string>();

  return (
    <>
      <Head>
        <title>Portdebruges.eu</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png " />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" />

        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "14f9ae94344a4b98b677c137a5ee8069"}'></script>
      </Head>

      <Page
        topComponent={
          <>
            {error ? <Error description={error} /> : null}
            {warning ? <Warning description={warning} /> : null}
          </>
        }>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <MeetnetComponent setError={setError} setWarning={setWarning} />

          <OpenWeatherComponent currentWeather={currentWeather} />

          <ThreeHourlyWeatherComponent threeHourlyWeather={threeHourlyWeather} />
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> */}
        {/* <WindfinderComponent superforecast={superforecast} /> */}
        {/* </div> */}
      </Page>
    </>
  );
};

export const getStaticProps = async () => {
  const [currentWeather, threeHourlyWeather] = await Promise.all([
    getCurrentWeather(),
    getThreeHourlyWeather(),
  ]);

  return {
    props: {
      currentWeather,
      threeHourlyWeather,
    },
    revalidate: 60 * 60 * 1, // update weather news every hour
  };
};

export default Home;
