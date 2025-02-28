// A component for common actions such as attacks

import PropTypes from 'prop-types';
import Tag from './Tag';

const Action = ({ action }) => {
  return (
    <div className="bg-violet-600 text-sm text-white px-2 py-3 rounded-md flex flex-col space-y-2">
      <p className='font-bold'>{action.name}</p>
      <p className="text-sm italic">{action.description}</p>

      <div className='flex justify-start space-x-4 items-center pt-2'>
        { action.range && (
          <div className='flex items-center'>
            <img src='/src/assets/range.svg' alt='Range' className='w-3 h-3 mr-1' />
            <p className='flex'>{action.range === 1 ? 'Melee' : action.range}</p>
          </div>
        )}

        {action.damage && (
          <div className='flex items-center'>
            <img src='/src/assets/damage.svg' alt='Damage' className='w-3 h-3 mr-1' />
            <p className='flex'>{action.damage}</p>
          </div>
        )}

        {action.ammo && (
          <div className='flex items-center'>
            <img src='/src/assets/ammo.svg' alt='Ammo' className='w-3 h-3 mr-1' />
            <p className='flex'>{action.ammo}</p>
          </div>
        )}

        {action.time && (
          <div className='flex items-center'>
            <img src='/src/assets/time.svg' alt='Time' className='w-3 h-3 mr-1' />
            <p className='flex'>{action.time}</p>
          </div>
        )}
      </div>

      <div className='flex justify-start space-x-2'>
        { action.tags && action.tags.map((tag) => (
          <Tag key={tag.name} tag={tag} />
        ))}
      </div>
    </div>
  );
}

export default Action;

Action.propTypes = {
  action: PropTypes.object.isRequired,
};
