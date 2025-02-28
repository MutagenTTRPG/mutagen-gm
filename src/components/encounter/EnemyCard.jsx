import PropTypes from 'prop-types';
import React from 'react';

const EnemyCard = ({ enemy, handleDamage }) => {
  const [damage, setDamage] = React.useState(0);

  return (
    <div key={enemy.encounterId} className='flex-col flex-grow space-y-1 p-4 bg-[#3e2f67] rounded shadow-md justify-center items-start'>
      <div className='flex items-center space-x-3'>
      <p className='text-xl flex mr-3'>{enemy.name}</p>
      <div className='flex items-center'>
        <img src='/src/assets/health-plus.svg' alt='Health' className='w-5 h-5 mr-1' />
        <p className='flex'> {enemy.currentHealth}/{enemy.maxHealth}</p>
      </div>
      <div className='flex items-center'>
        <img src='/src/assets/might2.svg' alt='Might' className='w-6 h-6 mr-1' />
          <p className='flex'>{enemy.currentMight}/{enemy.maxMight}</p>
      </div>
      <div className='flex items-center'>
        <img src='/src/assets/shield.svg' alt='Shield' className='w-5 h-5 mr-1' />
        <p className='flex'>{enemy.shield}</p>
      </div>
      <span className='flex-grow'></span>
      <input 
        type='number' 
        className='p-1 w-16 bg-purple-800 text-center rounded' 
        value={damage} 
        onChange={(e) => setDamage(Number(e.target.value))} 
      />
      <button 
        className='p-1 bg-purple-500 rounded cursor-pointer hover:bg-purple-600' 
        onClick={() => handleDamage(enemy.encounterId, damage)}
      >
        Deal Damage
        </button>
      </div>
      <div className='flex items-center space-x-1 w-1/2'>
        {enemy.traits.map((trait) => (
          <div key={trait} className='flex p-1 bg-purple-700 text-xs rounded flex-grow justify-center'>
            {trait.code}: {trait.value}
          </div>
        ))}
      </div>
      <div className='flex items-center space-x-1'>
        <p className='flex text-slate-200 font-light italic text-sm'>Horde, Weak</p>
      </div>
    </div>
  );
};

export default EnemyCard;

EnemyCard.propTypes = {
  enemy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    encounterId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    currentHealth: PropTypes.number,
    maxHealth: PropTypes.number,
    takeDamage: PropTypes.func,
    shield: PropTypes.number,
    currentMight: PropTypes.number,
    maxMight: PropTypes.number,
    attacks: PropTypes.arrayOf(PropTypes.string),
    traits: PropTypes.arrayOf(PropTypes.string),
    clone: PropTypes.func,
  }),
  handleDamage: PropTypes.func.isRequired
};