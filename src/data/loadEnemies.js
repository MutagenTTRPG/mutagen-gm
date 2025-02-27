// src/data/loadEnemies.js
import Enemy from '../models/Enemy';
import enemiesData from './enemies.json';

export const loadEnemies = () => {
  const enemies = [];
  
  enemiesData.forEach(enemyData => {
    const { id, name, type, level, faction, attacks, might } = enemyData;
    const enemy = new Enemy(id, name, type, level, faction, attacks, might);
    enemies.push(enemy);
  });

  return enemies;
};
