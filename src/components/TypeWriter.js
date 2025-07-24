"use client";
import { useState, useEffect } from 'react';

export default function TypeWriter({ 
  phrases, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  endPause = 1500 
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing', 'pausing', 'deleting'

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    switch (phase) {
      case 'typing':
        if (displayedText.length < currentPhrase.length) {
          // Type next character
          timeout = setTimeout(() => {
            setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
          }, typingSpeed);
        } else {
          // Switch to pause after full phrase is typed
          setPhase('pausing');
        }
        break;

      case 'pausing':
        // Pause at end of phrase
        timeout = setTimeout(() => {
          setPhase('deleting');
        }, endPause);
        break;

      case 'deleting':
        if (displayedText.length > 0) {
          // Delete next character
          timeout = setTimeout(() => {
            setDisplayedText(displayedText.substring(0, displayedText.length - 1));
          }, deletingSpeed);
        } else {
          // Move to next phrase when fully deleted
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setPhase('typing');
        }
        break;
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentPhraseIndex, phase, phrases, typingSpeed, deletingSpeed, endPause]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className={`ml-1 border-r-2 border-gray-800 ${phase !== 'pausing' ? 'animate-blink' : ''}`}>
        {phase === 'pausing' ? '' : '|'}
      </span>
    </span>
  );
}