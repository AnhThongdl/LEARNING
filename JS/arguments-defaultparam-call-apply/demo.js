//viet ham nhan vao n tham so dau vao
//dung Array.form de chuyen array-likeobject arguments sang array va su dung cac method cua array
function sum() {
    const number = Array.from(arguments);
    return number.reduce(function(sum,num) {
        return sum + num;
    }, 0);
}

console.log(sum(1, 3, 5, 7, 9));

// hoac
function sum1() {
    let result = 0;
    for (let i = 0; i <= arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log(sum1(1, 3, 5, 7, 9, 10));

//default parameter neu goi ham khong truyen bien vao thi set theo gia tri mac dinh

function greeting(name = 'Friend', language = 'japanese') {
    if (language == 'japanese') {
        return `Konichiwa, ${name}`;
    }

    if (language == 'english') {
        return `Hi, ${name}`;
    }

    return `Xin chao!`;
}

let a = greeting('uyen', 'english');
console.log(a);

//goi ham = method call, truyen vao cac tham so, tham so dau tien dai dien cho this, sau do se la cac tham so cua ham
//call: function.call(this, param1, param2,...); ko dung this thi this = null
function greeting1() {
    console.log(`Hi ${this.name}. I am ${this.age} years old!
Nice to meet you!`);
}

const cat = {
    name: 'Jerry',
    age: 10
};

console.log(greeting1.call(cat));


//apply: function.apply(this, [param1, param2,...]); ko dung this thi this = null

function sum() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function average() {
    const avg = sum.apply(null, arguments);
    return avg/arguments.length;
}

console.log(average(10, 20, 30, 40));

//enhance object literal, cach viet object moi gon hon tu ES6
const name = 'Tom';
const CAT = {
    name, //name: name,
    run() {   //run: function(console.log(`${this.name} is running!`) {}
        console.log(`${this.name} is running!`)
    }
};
CAT.run();

//class, ban chat giong nhu prototype, viet gon hon, trong co OOP hon
// function Mouse(name) {
//     this.name = name;
// }
// Mouse.prototype.run = function() {
//     console.log(`${this.name} is running`);
// }
// const mouse = new Mouse;
// mouse.run();
class Mouse {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log('${this.name} is running');
    }
}

const mouse = new Mouse;
mouse.run();

//class inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log('Eating....');
    }
}

class Bird extends Animal {
    fly() {
        console.log('Flying...')
    }
}

class Eagle extends Bird {
    hunting() {
        console.log('Killing machine....')
    }
}

const bird = new Bird('Parrot');
console.log(bird.name, bird.eat(), bird.fly());

const eagle = new Eagle('dog');
console.log(eagle.name, eagle.eat(), eagle.fly(), eagle.hunting());

//dung constructor function nhu bt
function Animal1(name) {
    this.name = name;
}

Animal1.prototype.eat = function(){
    console.log('Eating....');
}

function Bird1(name) {
    Animal1.apply(this, arguments);
}

Bird1.prototype = new Animal1;

const chim = new Bird1('cuc cu');
console.log(chim.name, chim.eat());