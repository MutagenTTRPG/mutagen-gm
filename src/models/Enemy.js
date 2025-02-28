// src/models/Enemy.js

class Enemy {
  constructor(id, name, type, level, faction, attacks, might, shield, traits) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.level = level;
    this.faction = faction;
    this.attacks = attacks;
    this.might = might;
    this.shield = shield;
    this.traits = traits;
    this.maxHealth = this.health();
    this.currentHealth = this.health();
    this.encounterId = id + Date.now(); // Unique ID for the encounter
  }

  // Method for handling damage
  takeDamage(damage) {
    if (this.currentHealth <= 0) {
      this.currentHealth = 0;
      return;
    }
    if (this.shield > 0) {
      const shieldDamage = Math.min(this.shield, damage);
      this.shield -= shieldDamage;
      damage -= shieldDamage;
    }

    if (damage > 0) {
      const damageAfterMight = Math.max(damage - this.might, 0);
      this.currentHealth -= damageAfterMight;
      this.might = Math.max(this.might - 1, 0);
    }

    if (this.currentHealth <= 0) {
      this.currentHealth = 0;
      return;
    }
  }

  health() {
    return this.might * this.typeMod();
  }


  typeMod() {
    switch (this.type) {
      case 'weak':
        return 2;
      case 'standard':
        return 3;
      case 'strong':
        return 5;
      case 'elite':
        return 8;
      case 'boss':
        return 10;
      default:
        return 2.0
    }
  }

  // Method to clone the enemy prototype
  clone() {
    return new Enemy(
      this.id,
      this.name,
      this.type,
      this.level,
      this.faction,
      this.attacks,
      this.might,
      this.shield,
      this.traits
    );
  }
}

export default Enemy;
