// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { loadEnemies } from '../data/loadEnemies';

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

  const handleDamage = (enemyId, damage) => {
    setEncounterEnemies((prevEnemies) =>
      prevEnemies.map((enemy) => {
        if (enemy.id === enemyId) {
          enemy.takeDamage(damage);
        }
        return enemy;
      })
    );
  };

  return (
    <div className='container w-full flex flex-col'>
      <h1 className='text-4xl mb-5'>Mutagen GM</h1>

      <div className='flex w-full'>
        <div className='flex flex-col flex-grow'>
          <h2>Current Encounter</h2>
          <ul>
            {encounterEnemies.sort((a, b) => b.level - a.level).map((enemy) => (
              <li key={enemy.id}>
                {enemy.name} (Health: {enemy.health}, Shield: {enemy.shield}, Might: {enemy.might})
                <button onClick={() => handleDamage(enemy.id, 20)}>Deal 20 Damage</button>
              </li>
            ))}
          </ul>
        </div>
      
        {/* List of available enemies */}
        <div className='flex flex-col w-1/3'>
          <h2>Available Enemies</h2>
          <ul>
            {enemies.map((enemy) => (
              <li key={enemy.id}>
                {enemy.name} (Level {enemy.level}) 
                <button onClick={() => addEnemy(enemy.id)}>Add to Encounter</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
