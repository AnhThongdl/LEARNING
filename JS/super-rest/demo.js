//super
class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
} 

const heroA = new Hero('A', 1000, 150);
const heroB = new Hero('B', 3000, 80);
console.log({heroA, heroB});

heroA.attack(heroB);
console.log('after attack', {heroA, heroB});

class RangedHero extends Hero {
    constructor(name, hp, damage, range) {
        super(name, hp, damage);
        this.range = range;
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp += this.range;
    }
}

const heroC = new RangedHero('C', 1500, 50, 20);
heroC.attack(heroA);
console.log('C attack A', {heroC, heroA});

//rest

function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((a, b) => a + b, 0);
}

const result = sum(1, 100, 200, 9);
console.log(result);
