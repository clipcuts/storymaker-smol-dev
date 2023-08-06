import { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { uploadGedcom } from '../lib/gedcom.js';

const FileInput = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const data = await uploadGedcom(file);
      if (data) {
        // Emit UPLOAD_SUCCESS message
        window.dispatchEvent(new CustomEvent('UPLOAD_SUCCESS', { detail: data }));
      }
    }
  };

  return (
    <Box>
      <Input type="file" id="fileInput" onChange={handleFileChange} accept=".ged" />
      <Button onClick={handleUpload} disabled={!file}>Upload</Button>
    </Box>
  );
};

export default FileInput;