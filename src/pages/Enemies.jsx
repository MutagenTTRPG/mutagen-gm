import { useState, useEffect } from 'react';
import { loadEnemies } from '../data/loadEnemies';
import EnemyCard from '../components/enemies/EnemyCard';

const Enemies = () => {
  const [enemies, setEnemies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setEnemies(loadEnemies());
  }, []);

  const filteredEnemies = enemies.filter(enemy => 
    enemy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container p-4 w-full">
      <h1 className="text-3xl font-bold mb-4">Global Threat Archives</h1>
      <input 
        type="text" 
        placeholder="Search enemies..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <div className="grid grid-cols-4 gap-4">
        {/* <div className="border-4 border-violet-800 p-4 rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer">
          <div className="rounded-full bg-violet-800 p-4">
            <img src="/src/assets/health-plus.svg" alt="Add" className="w-10 h-10" />  
          </div>
        </div> */}
        {filteredEnemies.map((enemy) => (
          <EnemyCard key={enemy.id} enemy={enemy} />
        ))}
      </div>
    </div>
  );
};

export default Enemies;