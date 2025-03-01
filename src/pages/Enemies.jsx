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
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {filteredEnemies.map((enemy) => (
          <EnemyCard key={enemy.id} enemy={enemy} />
        ))}
      </div>
    </div>
  );
};

export default Enemies;