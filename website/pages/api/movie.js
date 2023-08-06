import { NextApiRequest, NextApiResponse } from 'next';
import { MovieSchema } from '../../lib/gedcom.js';

let movieData = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(movieData);
      break;
    case 'POST':
      const { slide } = req.body;
      if (!slide) {
        res.status(400).json({ error: 'Slide data is required' });
        return;
      }
      if (!MovieSchema.isValid(slide)) {
        res.status(400).json({ error: 'Invalid slide data' });
        return;
      }
      movieData = { ...movieData, ...slide };
      res.status(200).json({ message: 'SLIDE_ADDED', movieData });
      break;
    case 'PUT':
      const { slideId, updatedSlide } = req.body;
      if (!slideId || !updatedSlide) {
        res.status(400).json({ error: 'Slide id and updated data are required' });
        return;
      }
      if (!MovieSchema.isValid(updatedSlide)) {
        res.status(400).json({ error: 'Invalid slide data' });
        return;
      }
      movieData[slideId] = updatedSlide;
      res.status(200).json({ message: 'SLIDE_UPDATED', movieData });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}