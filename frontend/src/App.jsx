import React from 'react';
import { SpeechRecognition } from './SpeechRecognition';
import { sendTranscriptToBackend, textToSpeech } from './api'; // Import your API communication and TTS functions

import './App.css';

function App() {
  const handleTranscript = async (transcript) => {
    try {
      const data = await sendTranscriptToBackend(transcript);
      textToSpeech(data.response);
    } catch (error) {
      console.error('Error processing transcript:', error);
      // Add any additional error handling logic here
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Interactive 3D World</h1>
        <SpeechRecognition onTranscript={handleTranscript} />
        {/* You can add more UI components related to your 3D world here */}
      </header>
      {/* Add other sections or components of your app as needed */}
    </div>
  );
}

export default App;
