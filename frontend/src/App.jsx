// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SpeechRecognition } from './SpeechRecognition';
import { sendTranscriptToBackend } from './api';
import { textToSpeech } from './tts';
import './App.css'; // Assuming you have an App.css for styling

const App = () => {
  const [completionsData, setCompletionsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // State to handle loading status

  useEffect(() => {
    setIsLoading(true); // Set loading to true while fetching
    axios.get('https://api.eden.art/completions')
      .then(response => {
        setCompletionsData(response.data);
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch(error => {
        console.error('Error fetching completions data:', error);
        setIsLoading(false); // Ensure loading is false even on error
      });
  }, []);

  const handleTranscript = async (transcript) => {
    console.log('Transcribed text:', transcript);
    try {
      const response = await sendTranscriptToBackend(transcript);
      textToSpeech(response);
    } catch (error) {
      console.error('Error processing transcript:', error);
    }
  };

  return (
    <div className="app-container">
      <SpeechRecognition onTranscript={handleTranscript} />
      {isLoading ? <p>Loading...</p> : null}
      {completionsData && <div className="completions-data">{JSON.stringify(completionsData)}</div>}
    </div>
  );
};

export default App;
