import { formatData } from "../mapper";
import type { currentDataResponse } from "../types/api";
import { AuthenticationError } from "./errors";

export type currentMeetnetData = ReturnType<typeof formatData>;

type accessTokenResponse = {
  accessToken: string;
};

export async function refreshAccessToken()  {
  const response = await fetch('/api/meetnet/accessToken');
  const data: accessTokenResponse = await response.json();
  return {
    accessToken: data.accessToken
  };
}

export async function getCurrentMeetnetData(accessToken: string) : Promise<currentMeetnetData> {
  const response = await fetch('https://api.meetnetvlaamsebanken.be/V2/CurrentData', {
    body: JSON.stringify({ IDs: ['ZDITLU', 'ZDIWVC', 'ZDIWC1', 'ZDIWRS' ] }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    }
  });

  if(!response.ok) {
    if (response.status === 401) {
      throw new AuthenticationError('Authentication error while fetching https://api.meetnetvlaamsebanken.be/V2/CurrentData');
    } else {
      throw new Error('Error while fetching https://api.meetnetvlaamsebanken.be/V2/CurrentData');
    }
  }
  const data : currentDataResponse = await response.json();
  return formatData(data);
}
