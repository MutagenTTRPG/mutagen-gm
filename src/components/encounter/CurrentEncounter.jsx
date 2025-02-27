import { useState } from 'react';
import PropTypes from 'prop-types';
import EncounterTitle from './EncounterTitle';

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
    setEncounterEnemies((prevEnemies) =>
      prevEnemies.map((enemy) => {
        if (enemy.encounterId === enemyEncounterId) {
          enemy.takeDamage(damage);
        }
        return enemy;
      })
    );
  };

  return (
    <div className='flex flex-col flex-grow p-5 rounded mr-5 bg-purple-950'>
      <EncounterTitle defaultTitle='Current Encounter' />
      <ul>
        {encounterEnemies.sort((a, b) => b.level - a.level).map((enemy) => (
          <li key={enemy.encounterId}>
            {enemy.name} (Health: {enemy.health}, Shield: {enemy.shield}, Might: {enemy.might})
            <button onClick={() => handleDamage(enemy.encounterId, 20)}>Deal 20 Damage</button>
          </li>
        ))}
      </ul>

      <h2 className='border-t border-solid border-slate-500 mt-3 pt-3'>Add Enemies</h2>
      <ul className='space-y-5'>
        {enemies.map((enemy) => (
          <li key={enemy.id}>
            <div className='flex justify-start space-x-3 items-center'>
              <p className='flex flex-grow'>{enemy.name} (Level {enemy.level})</p>
              <button className='p-2 rounded bg-purple-500 cursor-pointer hover:bg-purple-600' onClick={() => addEnemy(enemy.id)}>
                Add to Encounter
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

CurrentEncounter.propTypes = {
  enemies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
      health: PropTypes.number,
      shield: PropTypes.number,
      might: PropTypes.number,
      clone: PropTypes.func.isRequired, // Ensure clone method exists
    })
  ).isRequired,
};


export default CurrentEncounter;
