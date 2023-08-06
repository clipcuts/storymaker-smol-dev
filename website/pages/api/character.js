import { NextApiRequest, NextApiResponse } from 'next';
import { CharacterSchema } from '../../lib/gedcom.js';

let mainCharacter = null;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { characterId } = req.body;

    if (!characterId) {
      res.status(400).json({ error: 'Character ID is required' });
      return;
    }

    mainCharacter = CharacterSchema.findById(characterId);

    if (!mainCharacter) {
      res.status(404).json({ error: 'Character not found' });
      return;
    }

    res.status(200).json({ message: 'CHARACTER_SELECTED', mainCharacter });
  } else if (req.method === 'GET') {
    if (!mainCharacter) {
      res.status(404).json({ error: 'No character selected' });
      return;
    }

    res.status(200).json({ mainCharacter });
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}