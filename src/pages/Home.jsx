// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { loadEnemies } from '../data/loadEnemies';
import CurrentEncounter from '../components/encounter/currentEncounter';

const Home = () => {
  const [enemies, setEnemies] = useState([]);

  useEffect(() => {
    // Load all enemies from the JSON and set them in the state
    setEnemies(loadEnemies());
  }, []);

  return (
    <div className='container w-full flex flex-col'>
      <h1 className='text-4xl mb-5'>Mutagen GM</h1>

      <div className='flex w-full'>
        <CurrentEncounter enemies={enemies} />
      
        {/* List of available enemies */}
        <div className='flex flex-col w-1/3'>
          <h2>Available Enemies</h2>
          <ul>
            {enemies.map((enemy) => (
              <li key={enemy.id}>
                {enemy.name} (Level {enemy.level}) 
                {/* <button onClick={() => addEnemy(enemy.id)}>Add to Encounter</button> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
