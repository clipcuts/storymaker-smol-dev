```javascript
import axios from 'axios';

const LAMBDA_URL = 'https://your-lambda-function-url'; // replace with your lambda function url

export const startRender = async (movieData) => {
  try {
    const response = await axios.post(`${LAMBDA_URL}/start`, movieData);
    return response.data;
  } catch (error) {
    console.error('Error starting render:', error);
    throw error;
  }
};

export const updateRenderProgress = async () => {
  try {
    const response = await axios.get(`${LAMBDA_URL}/progress`);
    return response.data;
  } catch (error) {
    console.error('Error updating render progress:', error);
    throw error;
  }
};

export const completeRender = async () => {
  try {
    const response = await axios.get(`${LAMBDA_URL}/complete`);
    return response.data;
  } catch (error) {
    console.error('Error completing render:', error);
    throw error;
  }
};
```