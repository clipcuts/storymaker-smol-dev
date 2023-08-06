import { NextApiRequest, NextApiResponse } from 'next';
import { renderProgress } from '../../lib/lambda.js';

export default async function progress(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const progress = await renderProgress();
      res.status(200).json({ progress });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching render progress' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}