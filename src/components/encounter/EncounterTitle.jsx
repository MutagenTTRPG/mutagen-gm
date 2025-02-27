import { useState } from 'react';
import { Pencil } from 'lucide-react'; // Using Lucide React for the edit icon
import PropTypes from 'prop-types';

const EncounterTitle = ({ defaultTitle = 'Current Encounter' }) => {
  const [title, setTitle] = useState(defaultTitle);
  const [isEditing, setIsEditing] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className='flex items-center gap-2'>
      {isEditing ? (
        <input
          type='text'
          value={title}
          onChange={handleTitleChange}
          onBlur={handleBlur}
          autoFocus
          className='text-3xl border-b-2 border-gray-500 focus:outline-none'
        />
      ) : (
        <h2 className='text-3xl cursor-pointer' onClick={() => setIsEditing(true)}>
          {title}
        </h2>
      )}
      {!isEditing && (
        <Pencil size={20} className='cursor-pointer' onClick={() => setIsEditing(true)} />
      )}
    </div>
  );
};

export default EncounterTitle;

EncounterTitle.propTypes = {
  defaultTitle: PropTypes.string,
};