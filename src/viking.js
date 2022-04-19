const log = console.log;

log('JS LOADED HERE WE GO')


// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health || 0;
    this.strength = strength || 0;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= this.damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name || ' ';
  }
  receiveDamage(damage){
    this.health -= this.damage;
    if(this.health > 0) return `${this.name} has received ${this.damage} points of damage`
    else return `${this.name} has died in act of combat`
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.damage -= this.health;
    if(this.health > 0) `A saxon has received ${this.damage} points of damage`
    else return `A Saxon has died in combat`
  }
}

// War
class War {
  constructor(){
    this.vikingsArmy = [];
    this.saxonArmy = []
  }

addViking(viking){
  this.vikingsArmy.push(viking);
}

addSaxon(saxon){
  this.saxonArmy.push(saxon);
}

vikingAttack(){
  const vikingIndex = Math.floor(Math.random() * this.vikingsArmy.length);
  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
  const randomViking = this.vikingsArmy[vikingIndex]
  const randomSaxon = this.saxonArmy[saxonIndex]

  const damage = randomSaxon.receiveDamage(randomViking.attack());
  if(randomSaxon.health <= 0) this.saxonArmy.splice(saxonIndex, 1)

  return damage
}

saxonAttack(){
  const vikingIndex = Math.floor(Math.random() * this.vikingsArmy.length);
  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
  const randomViking = this.vikingsArmy[vikingIndex]
  const randomSaxon = this.saxonArmy[saxonIndex]

  const damage = randomViking.receiveDamage(randomViking.attack());
  if(randomViking.health <= 0) this.vikingsArmy.splice(vikingIndex, 1);

  return damage;
}

showStatus(){
if(saxonArmy.length === 0){return `Vikings have won the war of the century!`
} else if (vikingsArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}
else {return `Vikings and Saxons are still in the thick of battle.`}
}

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
