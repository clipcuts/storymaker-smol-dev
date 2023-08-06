import { NextApiRequest, NextApiResponse } from 'next';
import { render } from '../../lib/remotion';
import { movieData, renderProgress } from '../../lib/lambda';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { movieData } = req.body;
      const renderId = await render(movieData);

      res.status(200).json({ message: 'RENDER_STARTED', renderId });

      const intervalId = setInterval(async () => {
        const progress = await renderProgress(renderId);

        if (progress >= 100) {
          clearInterval(intervalId);
          res.status(200).json({ message: 'RENDER_COMPLETED', renderId });
        } else {
          res.status(200).json({ message: 'RENDER_PROGRESS', progress });
        }
      }, 1000);
    } catch (error) {
      res.status(500).json({ error: 'Error rendering movie' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}