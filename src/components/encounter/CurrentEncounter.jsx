import PropTypes from 'prop-types';
import EncounterTitle from './EncounterTitle';
import EnemyCard from './EnemyCard';
import { useEffect } from 'react';
import Enemy from '../../models/Enemy';

const CurrentEncounter = ({ encounterEnemies, setEncounterEnemies }) => {
  useEffect(() => {
    const savedEnemies = localStorage.getItem('encounterEnemies');
      if (savedEnemies) {
        const parsedEnemies = JSON.parse(savedEnemies)

        const newEnemies = parsedEnemies.map(enemyData => new Enemy(enemyData));
        setEncounterEnemies(newEnemies);
      }
    }, []);

  // Save to localStorage whenever encounterEnemies changes
  useEffect(() => {
    if (encounterEnemies.length > 0) {
        const plainEnemies = encounterEnemies.map(enemy => ({ ...enemy }));
        localStorage.setItem('encounterEnemies', JSON.stringify(plainEnemies))
    }
  }, [encounterEnemies]);

  const handleDamage = (enemyEncounterId, damage) => {
    encounterEnemies.forEach((enemy) => {
      if (enemy.encounterId === enemyEncounterId) {
        enemy.takeDamage(damage);
        setEncounterEnemies([...encounterEnemies]);
      }
    }
    );
  };
  

  return (
    <div className='flex flex-col flex-grow p-5 rounded mr-5'>
      <div className='flex justify-between items-center'>
        <EncounterTitle defaultTitle='Current Encounter' />
        <button  
          onClick={() => {
            setEncounterEnemies([]);
            localStorage.removeItem('encounterEnemies');
          }}
        >
          <img src='/src/assets/bin.svg' alt='Delete' className='w-4 h-4 mr-2 hover:scale-105 cursor-pointer' />
        </button>
        </div>
      <div className='flex flex-col justify-center w-full space-y-3 mt-3'>
        {encounterEnemies.sort((a, b) => b.level - a.level).map((enemy) => (
          <EnemyCard key={enemy.encounterId} enemy={enemy} handleDamage={handleDamage} />
        ))}
      </div>
    </div>
  );
};

CurrentEncounter.propTypes = {
  encounterEnemies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      currentHealth: PropTypes.number,
      maxHealth: PropTypes.number,
      shield: PropTypes.number,
      currentMight: PropTypes.number,
      maxMight: PropTypes.number,
      actions: PropTypes.arrayOf(PropTypes.string),
      clone: PropTypes.func.isRequired
    })
  ).isRequired,
  setEncounterEnemies: PropTypes.func.isRequired,
};


export default CurrentEncounter;
