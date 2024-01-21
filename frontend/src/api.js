// api.js
import axios from 'axios';

export const sendTranscriptToBackend = async (transcript) => {
  try {
    const response = await axios.post('/api/process', { transcript });
    return response.data;
  } catch (error) {
    console.error('Error sending transcript to backend:', error);
    // Handle or throw error as needed
    throw error;
  }
};
