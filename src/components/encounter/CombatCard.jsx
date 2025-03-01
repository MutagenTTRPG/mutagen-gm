import PropTypes from 'prop-types';
import React from 'react';

const CombatCard = ({ enemy, handleDamage }) => {
  const [damage, setDamage] = React.useState(0);

  return (
    <div key={enemy.encounterId} className='flex flex-grow space-y-1 p-4 bg-violet-800 rounded shadow-md justify-start items-center'>
      {/* <input checked={enemy.selected} type='checkbox' onChange={() => enemy.toggleSelected()} /> */}
      <div className='flex-col space-y-1 justify-center items-start w-full'>
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
          <div className='flex items-center'>
            <img src='/src/assets/speed.svg' alt='Shield' className='w-5 h-5 mr-1' />
            <p className='flex'>{enemy.speed}</p>
          </div>
          <span className='flex-grow'></span>
          
          <input 
            type='number' 
            className='p-1 w-16 bg-violet-900 text-center rounded' 
            value={damage} 
            min='0'
            onChange={(e) => setDamage(Number(e.target.value))} 
          />
          <button 
            className='p-1 bg-violet-500 rounded cursor-pointer hover:bg-violet-600' 
            onClick={() => handleDamage(enemy.encounterId, damage)}
          >
            Deal Damage
          </button>
            
        </div>

        <div className='flex items-center space-x-1 w-1/2'>
          {enemy.traits.map((trait) => (
            <div key={trait} className='flex p-1 bg-violet-700 text-xs rounded flex-grow justify-center'>
              {trait.code}: {trait.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombatCard;

CombatCard.propTypes = {
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
    speed: PropTypes.number,
    selected: PropTypes.bool,
    toggleSelected: PropTypes.func,
    actions: PropTypes.arrayOf(PropTypes.string),
    traits: PropTypes.arrayOf(PropTypes.string),
    clone: PropTypes.func,
  }),
  handleDamage: PropTypes.func.isRequired
};