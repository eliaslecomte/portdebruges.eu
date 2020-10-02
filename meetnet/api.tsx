import { formatData } from "./mapper";
import type { rawCurrentDataResponse } from "./types/api";

export type currentMeetnetData = ReturnType<typeof formatData>;

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
      throw Error('Authentication error while fetching https://api.meetnetvlaamsebanken.be/V2/CurrentData');
    } else {
      throw Error('Error while fetching https://api.meetnetvlaamsebanken.be/V2/CurrentData');
    }
  }
  const data : rawCurrentDataResponse = await response.json();
  return formatData(data);
}

//region unauthenticated api calls
export async function getNewAccessToken() {
  const formData = [];
  formData.push(`grant_type=${encodeURIComponent('password')}`);
  const username = process.env.MEETNET_USERNAME;
  const password = process.env.MEETNET_PASSWORD;
  if (typeof username !== 'string' || typeof password !== 'string') {
    throw Error('Could not get username or password from environment variables!');
  }
  formData.push(`username=${encodeURIComponent(username)}`);
  formData.push(`password=${encodeURIComponent(password)}`);
  const response = await fetch('https://api.meetnetvlaamsebanken.be/Token', {
    method: 'POST',
    body: formData.join("&"),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
  const data = await response.json();
  return data.access_token;
}
