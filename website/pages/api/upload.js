import { NextApiRequest, NextApiResponse } from 'next';
import { parseGedcom } from '../../lib/gedcom.js';

let gedcomData;

export default async function upload(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const file = req.files.gedcom;
    gedcomData = await parseGedcom(file.data);

    if (gedcomData) {
      res.status(200).json({ message: 'UPLOAD_SUCCESS', gedcomData });
    } else {
      res.status(400).json({ message: 'Failed to parse GEDCOM file.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed. Please use POST.' });
  }
}

export { gedcomData };