import React from 'react';
import clsx from 'clsx';

interface GradientTextProps {
  text: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className = "" }) => {
  return (
    <span
      style={{ fontFamily: 'Newsreader', lineHeight: 1 }}
      className={clsx(
        'mx-1 text-[24px] !leading-none font-semibold bg-gradient-to-r from-[#e16a92] to-[#f08eaf] bg-clip-text text-transparent',
        className
      )}
    >
      {text}
    </span>
  );
};

export default GradientText;