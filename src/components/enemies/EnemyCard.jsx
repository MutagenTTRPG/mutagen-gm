//  Card for the Enemy page

import Action from '../Action';
import PropTypes from 'prop-types';

const EnemyCard = ({ enemy }) => {
  return (
    <div key={enemy.id} className="bg-violet-800 p-4 rounded-lg shadow-lg flex flex-col space-y-3 max-h-92 overflow-y-scroll">
      <h2 className="text-xl font-bold">{enemy.name}</h2>
      <p className="text-gray-300 text-sm italic border-b border-violet-200 pb-2">{enemy.description}</p>

      <div className='flex justify-start space-x-2 items-center'>
        <p className="text-gray-300 text-sm">Level {enemy.level}</p>
        <div className='flex items-center'>
        <img src='/src/assets/health-plus.svg' alt='Health' className='w-5 h-5 mr-1' />
        <p className='flex'>{enemy.maxHealth}</p>
        </div>
        <div className='flex items-center'>
          <img src='/src/assets/might2.svg' alt='Might' className='w-6 h-6 mr-1' />
            <p className='flex'>{enemy.maxMight}</p>
        </div>
        <div className='flex items-center'>
          <img src='/src/assets/shield.svg' alt='Shield' className='w-5 h-5 mr-1' />
          <p className='flex'>{enemy.shield}</p>
        </div>
        <div className='flex items-center'>
          <img src='/src/assets/speed.svg' alt='Shield' className='w-5 h-5 mr-1' />
          <p className='flex'>{enemy.speed}</p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-2">
        { enemy.traits && enemy.traits.map((trait) => (
          <div key={trait} className="bg-violet-600 text-xs text-white p-1 rounded-md flex flex-col justify-center items-center">
            <p className='font-bold'>{trait.code}</p>
            <p>{trait.value}</p>
          </div>
        ))}
      </div>

      <div className='flex flex-col space-y-3'>
        {enemy.actions && enemy.actions.map((action) => (
          <Action key={action.name} action={action} />
        ))}
      </div>
    </div>
  )
};

export default EnemyCard;

EnemyCard.propTypes = {
  enemy: PropTypes.object.isRequired,
};
