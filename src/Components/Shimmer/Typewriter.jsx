import React, { useState, useEffect } from 'react';

const Typewriter = ({text,loop}) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if (index < text.length) {
            setDisplayText((prevText) => prevText + text[index]);
            setIndex((prevIndex) => prevIndex + 1);
          } else if (loop) {
            setDisplayText('');
            setIndex(0);
          }
      }, 500); // Adjust the delay between each character here (in milliseconds)
  
      return () => clearTimeout(timer);
    }, [index, text,loop]);
  
    return <span>{displayText}</span>;
  };


export default Typewriter