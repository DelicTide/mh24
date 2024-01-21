// SpeechRecognition.jsx

import React, { useCallback } from 'react';

export const SpeechRecognition = ({ onTranscript }) => {
  const startSTT = useCallback(() => {
    const recognition = new window.SpeechRecognition();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
    };
    recognition.start();
  }, [onTranscript]);

  return (
    <button onClick={startSTT}>Start Speech Recognition</button>
  );
};
