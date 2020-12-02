import type { NextApiRequest, NextApiResponse } from 'next';

import { getAccessToken } from '../../../meetnet/api/server';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = await getAccessToken();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ accessToken }));
};
