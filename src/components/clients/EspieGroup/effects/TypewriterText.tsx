import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  highlightColor?: 'green' | 'blue' | 'cyan' | 'orange';
  showCursor?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  highlightColor = 'green',
  showCursor = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const getHighlightColor = () => {
    switch (highlightColor) {
      case 'green':
        return 'hsl(120, 100%, 50%)';
      case 'blue':
        return 'hsl(240, 100%, 60%)';
      case 'cyan':
        return 'hsl(180, 100%, 50%)';
      case 'orange':
        return 'hsl(30, 100%, 50%)';
      default:
        return 'hsl(120, 100%, 50%)';
    }
  };

  useEffect(() => {
    const startTyping = () => {
      setIsTyping(true);
      
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
        }
      }, speed);

      return timer;
    };

    const initialDelay = setTimeout(() => {
      const timer = startTyping();
      return () => clearTimeout(timer);
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [currentIndex, text, speed, delay]);

  const highlightColorValue = getHighlightColor();

  return (
    <span className={`relative inline-block ${className}`}>
      {/* Base text (invisible, maintains layout) */}
      <span className="opacity-0 select-none">{text}</span>
      
      {/* Visible typing text */}
      <span className="absolute top-0 left-0">
        {displayText.split('').map((char, index) => {
          const isLastChar = index === displayText.length - 1;
          const shouldHighlight = isTyping && isLastChar;
          
          return (
            <span
              key={index}
              className={`relative transition-all duration-200 ${
                shouldHighlight ? 'typewriter-highlight' : ''
              }`}
              style={shouldHighlight ? {
                color: highlightColorValue,
                textShadow: `0 0 10px ${highlightColorValue}, 0 0 20px ${highlightColorValue}40`,
                filter: 'brightness(1.2)'
              } : {}}
            >
              {char === ' ' ? '\u00A0' : char}
              
              {/* Neon glow effect for highlighted character */}
              {shouldHighlight && (
                <>
                  <span 
                    className="absolute inset-0 animate-pulse"
                    style={{
                      color: highlightColorValue,
                      textShadow: `0 0 5px ${highlightColorValue}80`,
                      filter: 'blur(1px)'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                  
                  {/* Extra glow layer */}
                  <span 
                    className="absolute inset-0"
                    style={{
                      color: highlightColorValue,
                      textShadow: `0 0 15px ${highlightColorValue}60, 0 0 25px ${highlightColorValue}40`,
                      filter: 'blur(2px)',
                      opacity: 0.7
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                </>
              )}
            </span>
          );
        })}
        
        {/* Typing cursor */}
        {showCursor && isTyping && (
          <span 
            className="inline-block w-0.5 ml-1 animate-pulse typewriter-cursor"
            style={{
              backgroundColor: highlightColorValue,
              boxShadow: `0 0 10px ${highlightColorValue}`,
              height: '1em'
            }}
          />
        )}
      </span>
    </span>
  );
};

export default TypewriterText;