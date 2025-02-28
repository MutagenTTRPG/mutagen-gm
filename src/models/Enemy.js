// src/models/Enemy.js

class Enemy {
  constructor(data) {
    Object.assign(this, data);
    this.currentMight = data.currentMight ?? data.maxMight;
    this.maxHealth = this.health();
    this.currentHealth = data.currentHealth ?? this.health();
    this.encounterId = data.id + Date.now();
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
      ...this
    }
    );
  }
}

export default Enemy;
