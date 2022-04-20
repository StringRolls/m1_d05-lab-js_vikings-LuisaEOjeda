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
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name || ' ';
  }
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`
  }
  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0) return `A saxon has received ${damage} points of damage`
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
  console.log(damage);
  return damage;
}

saxonAttack(){
  const vikingIndex = Math.floor(Math.random() * this.vikingsArmy.length);
  const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
  const randomViking = this.vikingsArmy[vikingIndex]
  const randomSaxon = this.saxonArmy[saxonIndex]

  const damage = randomViking.receiveDamage(randomSaxon.attack());
  if(randomViking.health <= 0) this.vikingsArmy.splice(vikingIndex, 1);
  console.log(damage);
  return damage;
}

showStatus(){
if(this.saxonArmy.length === 0){return `Vikings have won the war of the century!`
} else if (this.vikingsArmy.length === 0) {return `Saxons have fought for their lives and survived another day...`}
else {return `Vikings and Saxons are still in the thick of battle.`}
}

}

const war1 = new War();

const turns = [1,2,3,4,5,6,7,8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const viking1 = new Viking('Thor', 200, 100);
const viking2 = new Viking('Luisa', 200, 100);
const viking3 = new Viking('Aleix', 200, 100);
const viking4 = new Viking('Bjork', 200, 100);
const viking5 = new Viking('Pablo', 200, 100);
const viking6 = new Viking('Klaus', 200, 100);
const viking7 = new Viking('Corina', 200, 100);
const viking8 = new Viking('Marco', 200, 100);

const vikingArr = [viking1, viking2, viking3, viking4, viking5, viking6, viking7, viking8];


const saxon1 = new Saxon(200, 10);
const saxon2 = new Saxon(200, 10);
const saxon3 = new Saxon(200, 10);
const saxon4 = new Saxon(200, 10);
const saxon5 = new Saxon(200, 10);
const saxon6 = new Saxon(200, 10);
const saxon7 = new Saxon(200, 10);
const saxon8 = new Saxon(200, 10);
const saxonArr = [saxon1, saxon2, saxon3, saxon4, saxon5, saxon6, saxon7, saxon8];


vikingArr.forEach(viking => war1.addViking(viking));

saxonArr.forEach(saxon => war1.addSaxon(saxon));

console.log(war1.saxonArmy, war1.vikingsArmy);

turns.forEach(turn => {
  if(war1.saxonArmy.length > 0 && war1.vikingsArmy.length > 0){
    console.log(`Turn ${turn}:`)
    war1.saxonAttack()
    war1.vikingAttack()
    console.log(war1.showStatus());
  }
})

console.log(war1.saxonArmy, war1.vikingsArmy)

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
