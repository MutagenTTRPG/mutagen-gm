// src/models/Enemy.js

class Enemy {
  constructor({ id, name, type, level, faction, attacks, currentMight, maxMight, shield, traits, currentHealth }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.level = level;
    this.faction = faction;
    this.attacks = attacks;
    this.currentMight = currentMight ?? maxMight;
    this.maxMight = maxMight;
    this.shield = shield;
    this.traits = traits;
    this.maxHealth = this.health();
    this.currentHealth = currentHealth ?? this.health();
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
      const damageAfterMight = Math.max(damage - this.currentMight, 0);
      this.currentHealth -= damageAfterMight;
      this.currentMight = Math.max(this.currentMight - 1, 0);
    }

    if (this.currentHealth <= 0) {
      this.currentHealth = 0;
      return;
    }
  }

  health() {
    return this.maxMight * this.typeMod();
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
    return new Enemy({
      id: this.id,
      encounterId: this.id + Date.now(),
      name: this.name,
      type: this.type,
      level: this.level,
      faction: this.faction,
      attacks: this.attacks,
      currentMight: this.currentMight,
      maxMight: this.maxMight,
      shield: this.shield,
      traits: this.traits,
      currentHealth: this.currentHealth,
      maxHealth: this.maxHealth
    }
    );
  }
}

export default Enemy;
