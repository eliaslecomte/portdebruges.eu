import type { NextApiRequest, NextApiResponse } from 'next';

import { getAccessToken } from '../../../meetnet/api/server';

const accessToken = async (_req: NextApiRequest, res: NextApiResponse) => {
  const newToken = await getAccessToken();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ accessToken: newToken }));
};

export default accessToken;
