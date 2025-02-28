// src/data/loadEnemies.js
import Enemy from '../models/Enemy';
import enemiesData from './enemies.json';

export const loadEnemies = () => {
  const enemies = [];
  
  enemiesData.forEach(enemyData => {
    const enemy = new Enemy(enemyData);
    enemies.push(enemy);
  });

  return enemies;
};
