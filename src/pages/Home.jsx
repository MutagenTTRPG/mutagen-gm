// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { loadEnemies } from '../data/loadEnemies';
import CurrentEncounter from '../components/encounter/currentEncounter';
import EnemyList from '../components/encounter/EnemyList';

const Home = () => {
  const [enemies, setEnemies] = useState([]);
  const [encounterEnemies, setEncounterEnemies] = useState([]);

  useEffect(() => {
    // Load all enemies from the JSON and set them in the state
    setEnemies(loadEnemies());
  }, []);

  const addEnemy = (enemyId) => {
    const enemyPrototype = enemies.find((enemy) => enemy.id === enemyId);
    if (enemyPrototype) {
      const clonedEnemy = enemyPrototype.clone();
      setEncounterEnemies((prevEnemies) => [...prevEnemies, clonedEnemy]);
    }
  };

  return (
    <div className='container w-full flex'>
      <CurrentEncounter encounterEnemies={encounterEnemies} setEncounterEnemies={setEncounterEnemies} />
      <EnemyList enemies={enemies} addEnemy={addEnemy} setEncounterEnemies={setEncounterEnemies} />
    </div>
  );
};

export default Home;
