
import useSWR from 'swr';
import { parseCookies, setCookie } from 'nookies';

import { getCurrentMeetnetData, refreshAccessToken } from '../api';

import { FC, useEffect } from 'react';
import { AuthenticationError } from '../api/errors';

import Temperature from '../../core/components/info/temperature';
import Loading, { Size } from '../../core/components/info/loading';
import { WindIndication } from '../../core/enums';
import WindSpeed from '../../core/components/info/windSpeed';
import Direction from '../../core/components/info/direction';
import WindArrow from '../../core/components/drawables/windArrow';
import Table from '../../core/components/table';
import Block from '../../core/components/structure/block';

type Props = { 
  setError: Function,
  setWarning: Function,
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

const MeetnetComponent:FC<Props> = ({ setError, setWarning }) => {
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
      if (meetnetApiError instanceof AuthenticationError) {
        setWarning("Tijd om het water op te gaan 🪁! Bezig met meetnet data op te halen..");
        refreshMeetnetAccessToken();
      } else {
        setError("We ging iets mis tijdens het ophalen van de meetnet data 🤕.");
      }
    } else {
      setError();
      setWarning();
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
    <Block
      title="Meetnet"
      descriptions={[
        {
          hideMobile: true,
          content: <>In het kader van Safekiting meet de Vlaamse Overheid op verschillende plaatsen de windsnelheid, richting en temperatuur.
          In Zeebrugge staat de meet apparatuur op de havenmuur.</>
        },
        {
          content: <>Laatste update: {currentMeetnetData?.measurementTaken ? <code>{currentMeetnetData.measurementTaken.toLocaleString()}</code> : <Loading size={Size.small} /> }</>
        }
      ]}>
        <Table values={[
        { title: 'Temperatuur', description: currentMeetnetData?.temperature ? <Temperature current={currentMeetnetData.temperature} /> : <Loading size={Size.small} /> },
        {
          title: 'Wind snelheid',
          description: currentMeetnetData?.windSpeed.metersPerSecond && currentMeetnetData?.windSpeed.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windSpeed.metersPerSecond} knots={currentMeetnetData.windSpeed.knots} /> : <Loading size={Size.regular} />,
          // style: backgroundColourOnWindStrength(currentMeetnetData?.windSpeed.strength),
        },
        {
          title: 'Gusts',
          description: currentMeetnetData?.windGusts.metersPerSecond && currentMeetnetData?.windGusts.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windGusts.metersPerSecond} knots={currentMeetnetData.windGusts.knots} /> : <Loading size ={Size.regular} />,
          // style: backgroundColourOnWindStrength(currentMeetnetData?.windGusts.strength),
        },
        { title: 'Windrichting', description: currentMeetnetData?.windDirection ?
          <>
            <WindArrow direction={currentMeetnetData.windDirection} />
            <Direction value={currentMeetnetData.windDirection} />
          </>
          : <Loading /> },
        ]} />
      </Block>
  )
};

export default MeetnetComponent;
