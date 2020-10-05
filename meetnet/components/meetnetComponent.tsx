
import useSWR from 'swr';
import { parseCookies, setCookie } from 'nookies';

import { getCurrentMeetnetData, refreshAccessToken } from '../api';

import { FC, useEffect } from 'react';
import { AuthenticationError } from '../api/errors';

import Temperature from '../../core/components/text/temperature';
import Loading, { Size } from '../../core/components/text/loading';
import { WindIndication } from '../../core/enums';
import WindSpeed from '../../core/components/text/windSpeed';
import Direction from '../../core/components/text/direction';
import WindArrow from './windArrow';
import Table from '../../core/components/table';

type Props = { 
  setError: any,
}

const backgroundColourOnWindStrength = (strength?: WindIndication) => {
  switch(strength) {
    case WindIndication.light:
      return 'bg-green-200';
    case WindIndication.good:
      return 'bg-green-300';
    case WindIndication.strong:
      return 'bg-green-red-200'
    case WindIndication.danger:
      return 'bg-green-red-300'
    default:
      return '';
  }
}

export const MeetnetComponent:FC<Props> = ({ setError }) => {
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
    if (meetnetApiError) {
      setError("Er ging iets  is met data opvragen van meetnet", meetnetApiError);

      if (meetnetApiError instanceof AuthenticationError) {
        refreshMeetnetAccessToken();
      }
    } else {
      setError();
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
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Meetnet
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500 hidden md:block">
          In het kader van Safekiting meet de Vlaamse Overheid op verschillende plaatsen de windsnelheid, richting en temperatuur.
          In Zeebrugge staat de meet apparatuur op de havenmuur.
        </p>
        <span className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          Laatste update: {currentMeetnetData?.measurementTaken ? <code>{currentMeetnetData.measurementTaken.toLocaleString()}</code> : <Loading size={Size.small} /> }.
        </span>
      </div>

      <Table values={[
        { title: 'Temperatuur', description: currentMeetnetData?.temperature ? <Temperature value={currentMeetnetData.temperature} /> : <Loading size={Size.small} /> },
        {
          title: 'Wind snelheid',
          description: currentMeetnetData?.windSpeed.metersPerSecond && currentMeetnetData?.windSpeed.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windSpeed.metersPerSecond} knots={currentMeetnetData.windSpeed.knots} /> : <Loading size={Size.regular} />,
          style: backgroundColourOnWindStrength(currentMeetnetData?.windSpeed.strength),
        },
        {
          title: 'Gusts',
          description: currentMeetnetData?.windGusts.metersPerSecond && currentMeetnetData?.windGusts.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windGusts.metersPerSecond} knots={currentMeetnetData.windGusts.knots} /> : <Loading size ={Size.regular} />,
          style: backgroundColourOnWindStrength(currentMeetnetData?.windGusts.strength),
        },
        { title: 'Windrichting', description: currentMeetnetData?.windDirection ?
          <>
            <WindArrow direction={currentMeetnetData.windDirection} />
            <Direction value={currentMeetnetData.windDirection} />
          </>
          : <Loading /> },
      ]} />
    </div>
  )
};

export default MeetnetComponent;
