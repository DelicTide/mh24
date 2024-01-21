// App.jsx
import React from 'react';
import { SpeechRecognition } from './SpeechRecognition';
import { sendTranscriptToBackend } from './api'; // Module for sending data to the backend
import { textToSpeech } from './tts'; // Module for converting text to speech

const App = () => {
  // This function handles the transcribed text from speech recognition
  const handleTranscript = async (transcript) => {
    console.log('Transcribed text:', transcript);

    try {
      // Send the transcript to the backend and get the response
      const response = await sendTranscriptToBackend(transcript);

      // Use the response (e.g., convert response text to speech)
      textToSpeech(response);

    } catch (error) {
      console.error('Error processing transcript:', error);
    }
  };

  return (
    <div>
      <SpeechRecognition onTranscript={handleTranscript} />
      {/* Other components of your app */}
    </div>
  );
};

export default App;
