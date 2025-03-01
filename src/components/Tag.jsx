import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import tagData from '../data/tags.json';

const Tag = ({ tag }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: '50%' });
  const tooltipRef = useRef(null);

  // Normalize input to lowercase for case-insensitive matching
  const tagObj = tagData.find((t) => t.name.toLowerCase() === tag.toLowerCase());

  if (!tagObj) {
    return null;
  }

  useEffect(() => {
    if (showTooltip && tooltipRef.current) {
      const tooltip = tooltipRef.current;
      const tooltipWidth = tooltip.offsetWidth;
      const windowWidth = window.innerWidth;
      const leftPosition = tooltip.getBoundingClientRect().left;

      // If tooltip goes beyond the screen, adjust the position
      if (leftPosition + tooltipWidth > windowWidth) {
        setTooltipPosition({ left: `calc(100% - ${tooltipWidth + 10}px)` }); // 10px margin for buffer
      } else {
        setTooltipPosition({ left: '50%' });
      }
    }
  }, [showTooltip]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="bg-violet-800 text-xs text-white px-2 py-1 rounded-md">
        <p>{tagObj.name}</p>
      </div>
      {showTooltip && (
       <div
       ref={tooltipRef}
       className="fixed w-max bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg z-50"
       style={{
         top: `${tooltipRef.current?.getBoundingClientRect().top + window.scrollY - 50}px`, // 10px above the tag
         left: `${tooltipRef.current?.getBoundingClientRect().left + window.scrollX + 200}px`,
         transform: 'translateX(-50%)'
       }}
     >
       {tagObj.description}
     </div>
     
      )}
    </div>
  );
};

export default Tag;

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};
