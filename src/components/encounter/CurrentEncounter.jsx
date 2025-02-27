import { useState } from 'react';
import PropTypes from 'prop-types';
import EncounterTitle from './EncounterTitle';
import EnemyCard from './EnemyCard';

const CurrentEncounter = ({ enemies }) => {
  const [encounterEnemies, setEncounterEnemies] = useState([]);

  const addEnemy = (enemyId) => {
    const enemyPrototype = enemies.find((enemy) => enemy.id === enemyId);
    if (enemyPrototype) {
      const clonedEnemy = enemyPrototype.clone();
      setEncounterEnemies((prevEnemies) => [...prevEnemies, clonedEnemy]);
    }
  };

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
    <div className='flex flex-col flex-grow p-5 rounded mr-5 bg-purple-950'>
      <EncounterTitle defaultTitle='Current Encounter' />
      <div className='flex flex-col justify-center w-full space-y-3 mt-3'>
        {encounterEnemies.sort((a, b) => b.level - a.level).map((enemy) => (
          <EnemyCard key={enemy.encounterId} enemy={enemy} handleDamage={handleDamage} />
        ))}
      </div>

      <h2 className='border-t border-solid border-slate-500 mt-3 pt-3'>Add Enemies</h2>
      <div className='space-y-5 flex flex-col'>
        {enemies.map((enemy) => (
          <div key={enemy.id}>
            <div className='flex justify-start space-x-3 items-center'>
              <p className='flex flex-grow'>{enemy.name} (Level {enemy.level})</p>
              <button className='p-2 rounded bg-purple-500 cursor-pointer hover:bg-purple-600' onClick={() => addEnemy(enemy.id)}>
                Add to Encounter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CurrentEncounter.propTypes = {
  enemies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      currentHealth: PropTypes.number,
      maxHealth: PropTypes.number,
      shield: PropTypes.number,
      might: PropTypes.number,
      clone: PropTypes.func.isRequired, // Ensure clone method exists
    })
  ).isRequired,
};


export default CurrentEncounter;
