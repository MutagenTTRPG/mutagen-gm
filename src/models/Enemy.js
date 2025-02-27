// src/models/Enemy.js

class Enemy {
  constructor(id, name, type, level, faction, attacks) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.level = level;
    this.faction = faction;
    this.attacks = attacks;
    this.health = 100;  // default health, can be updated later
    this.might = 10;    // default might, can be updated later
    this.shield = 50;   // default shield, can be updated later
    this.encounterId = id + Date.now(); // Unique ID for the encounter
  }

  // Method for handling damage
  takeDamage(damage) {
    if (this.shield > 0) {
      const shieldDamage = Math.min(this.shield, damage);
      this.shield -= shieldDamage;
      damage -= shieldDamage;
    }

    if (damage > 0) {
      const damageAfterMight = Math.max(damage - this.might, 0);
      this.health -= damageAfterMight;
      this.might = Math.max(this.might - 1, 0); // Might cannot go below 0
    }

    // You can add more behavior here (e.g., death check, etc.)
  }

  // Method to clone the enemy prototype
  clone() {
    return new Enemy(this.id, this.name, this.type, this.level, this.faction, this.attacks);
  }
}

export default Enemy;
