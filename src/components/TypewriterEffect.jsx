import { useEffect, useState } from "react";

import { WORDS_GENERATOR } from "../words-generator";

export default function TypewriterEffect() {
  const words = WORDS_GENERATOR;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(
      () => {
        if (isTyping) {
          // Typing phase
          if (charIndex < currentWord.length) {
            setCurrentText(currentWord.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Word is complete, wait then start deleting
            setTimeout(() => {
              setIsTyping(false);
            }, 2000);
          }
        } else {
          // Deleting phase
          if (charIndex > 0) {
            setCurrentText(currentWord.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Word is deleted, move to next word
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? 70 : 30,
    ); // Typing speed vs deleting speed

    return () => clearTimeout(timer);
  }, [currentWordIndex, charIndex, isTyping, words]);

  return (
    <span className="font-[Comic_Relief] text-7xl">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
