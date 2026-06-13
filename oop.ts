class Human {
    name: string;
    surname: string;

    constructor(name: string, surname: string){
        this.name = name;
        this.surname = surname;
    }

    define(): void {
        console.log(`Name: ${this.name} - Surname: ${this.surname}`);
    }
}

let human : Human = new Human('kerem', 'keskinoğlu');
human.define();

class WorkerOne{
    constructor(
        public name: string,
        private surname: string,
        protected salary: number
    ) {}

    showSalary(): void {
        console.log(`Salar: ${this.salary}`);
    } 
}

let worker = new WorkerOne('kerem', 'keskinoğlu', 4000);
worker.showSalary();


// inheritance

class Animal{
    constructor(
        public name: string,
        public age: number
    ){}
}

class Dog extends Animal{
    type: string;
    
    constructor(name: string, age: number, type: string) {
        super(name, age);
        this.type = type;
    }

    define(): void{
        console.log(`
               Name : ${this.name}
               Age : ${this.age}
               Type : ${this.type}
            `)
    }
}

const dog : Dog = new Dog('Alice', 25, 'Dog');
dog.define();


console.log('##########################');

//abstract classes

abstract class Talk {
    abstract talk(): void;

    sayHello(): void { console.log('hello') }
}

class Friend extends Talk{
    talk(): void {
        console.log('Im talking...');
    }
}

const friend : Friend = new Friend()
friend.sayHello();
friend.talk();

// Interfaces

interface IEducateable {
    getCertificate(courseName: string): void;
}

class Intern implements IEducateable{
    getCertificate(courseName: string): void {
        console.log(`This intern complated the ${courseName} course and got certificate!`);
    }
}

const intern : Intern = new Intern();
intern.getCertificate('Harvard:CS50');