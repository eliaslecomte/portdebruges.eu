import { parseCookies, setCookie } from 'nookies';
import { FC, useEffect, useState } from 'react';
import useSWR from 'swr';

import WindArrow from '../../core/components/images/windArrow';
import Datetime from '../../core/components/info/datetime';
import Direction from '../../core/components/info/direction';
import Loading, { Size } from '../../core/components/info/loading';
import Temperature from '../../core/components/info/temperature';
import WindDirection from '../../core/components/info/windDirection';
import WindSpeed from '../../core/components/info/windSpeed';
import Block from '../../core/components/structure/block';
import Table from '../../core/components/structure/table';
import { getCurrentMeetnetData, refreshAccessToken } from '../api';
import { AuthenticationError } from '../api/errors';

type Props = {
  setError: Function;
  setWarning: Function;
};

const MeetnetComponent: FC<Props> = ({ setError, setWarning }) => {
  const meetnetAccessTokenFromCookie = parseCookies().meetnetAccessToken;

  // TODO: store these keys with the api methods
  // or move the useSWR to the api layer completely
  const { data: meetnetAccessTokenResponse, error, mutate: refreshMeetnetAccessToken } = useSWR(
    'meetnet/accessToken',
    refreshAccessToken,
    {
      revalidateOnReconnect: false,
      revalidateOnFocus: false,
      fallbackData: meetnetAccessTokenFromCookie
        ? {
            accessToken: meetnetAccessTokenFromCookie
          }
        : null
    }
  );
  // https://swr.vercel.app/docs/conditional-fetching
  const { data: currentMeetnetData, error: meetnetApiError } = useSWR(
    meetnetAccessTokenResponse
      ? ['meetnet/currentMeetnetData', meetnetAccessTokenResponse.accessToken]
      : null,
    (url: string, accessToken: string) => getCurrentMeetnetData(accessToken),
    { refreshInterval: 60 * 1000 }
  );

  useEffect(() => {
    if (meetnetApiError) {
      if (meetnetApiError instanceof AuthenticationError) {
        setWarning(
          'Nog steeds hier? Even alles updaten, even geduld. Veel plezier op het water🪁!'
        );
        refreshMeetnetAccessToken();
      } else {
        setError('We ging iets mis tijdens het ophalen van de meetnet data 🤕.');
      }
    } else {
      setError();
      setWarning();
    }
  }, [meetnetApiError]);

  useEffect(() => {
    if (
      meetnetAccessTokenResponse?.accessToken &&
      meetnetAccessTokenResponse?.accessToken !== meetnetAccessTokenFromCookie
    ) {
      setCookie(null, 'meetnetAccessToken', meetnetAccessTokenResponse.accessToken, {
        maxAge: 60 * 60, // meetnet access tokens expire after 1 hour
        path: '/'
      });
    }
  }, [meetnetAccessTokenResponse]);

  const [isUpdated, setUpdated] = useState(false);

  useEffect(() => {
    if (currentMeetnetData?.measurementTaken) {
      if (currentMeetnetData.measurementTaken > new Date(Date.now() - 60 * 1000)) {
        setUpdated(true);
      }
    }
  }, [currentMeetnetData]);

  useEffect(() => {
    if (isUpdated) {
      const timeout = setTimeout(() => setUpdated(false), 10 * 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isUpdated]);

  return (
    <Block
      title="Huidige wind"
      description="In het kader van Safekiting meet de Vlaamse Overheid op verschillende plaatsen de windsnelheid, richting en temperatuur.
          In Zeebrugge staat de meet apparatuur op de havenmuur.">
      <Table
        values={[
          {
            title: 'Temperatuur',
            description: currentMeetnetData?.temperature ? (
              <Temperature current={currentMeetnetData.temperature} />
            ) : (
              <Loading size={Size.small} />
            ),
            showUpdated: isUpdated
          },
          {
            title: 'Wind snelheid',
            description:
              currentMeetnetData?.windSpeed.metersPerSecond &&
              currentMeetnetData?.windSpeed.knots ? (
                <WindSpeed
                  metersPerSecond={currentMeetnetData.windSpeed.metersPerSecond}
                  knots={currentMeetnetData.windSpeed.knots}
                />
              ) : (
                <Loading size={Size.regular} />
              ),
            showUpdated: isUpdated
          },
          {
            title: 'Gusts',
            description:
              currentMeetnetData?.windGusts.metersPerSecond &&
              currentMeetnetData?.windGusts.knots ? (
                <WindSpeed
                  metersPerSecond={currentMeetnetData.windGusts.metersPerSecond}
                  knots={currentMeetnetData.windGusts.knots}
                />
              ) : (
                <Loading size={Size.regular} />
              ),
            showUpdated: isUpdated
          },
          {
            title: 'Windrichting',
            description: currentMeetnetData?.windDirection ? (
              <WindDirection direction={currentMeetnetData.windDirection} />
            ) : (
              <Loading size={Size.small} />
            ),
            showUpdated: isUpdated
          },
          {
            title: 'Laatste update',
            description: currentMeetnetData?.measurementTaken ? (
              <span className="">
                <Datetime date={currentMeetnetData.measurementTaken} />
              </span>
            ) : (
              <Loading />
            ),
            showUpdated: isUpdated
          }
        ]}
      />
    </Block>
  );
};

export default MeetnetComponent;
