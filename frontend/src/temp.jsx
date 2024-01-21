// App.jsx

import React from 'react';
import { SpeechRecognition } from './SpeechRecognition';
import { sendTranscriptToBackend, textToSpeech } from './api';

const App = () => {
  const handleTranscript = async (transcript) => {
    const data = await sendTranscriptToBackend(transcript);
    textToSpeech(data.response);
  };

  return (
    <div>
      <SpeechRecognition onTranscript={handleTranscript} />
      {/* Your other components */}
    </div>
  );
};

export default App;
