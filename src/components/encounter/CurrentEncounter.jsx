import PropTypes from 'prop-types';
import EncounterTitle from './EncounterTitle';
import EnemyCard from './EnemyCard';

const CurrentEncounter = ({ encounterEnemies, setEncounterEnemies }) => {
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
      might: PropTypes.number,
      clone: PropTypes.func.isRequired, // Ensure clone method exists
    })
  ).isRequired,
  setEncounterEnemies: PropTypes.func.isRequired,
};


export default CurrentEncounter;
