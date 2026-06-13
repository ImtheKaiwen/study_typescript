type UniqueId = string;
type Age = number;

let userId : UniqueId = 'user075*';
let userAge : Age = 25;

// object 

type MotorType = {
    horse: number;
    volume: string;
}

type Car = {
    readonly brand: string;
    model: string;
    year: number;
    motor: MotorType;
    color?: string;
}

const myCar: Car = {
    brand : 'Lamborghini',
    model : 'Huracan',
    year : 2026,
    color : 'red',
    motor : {
        horse : 4000,
        volume : 'Electric'
    }
}

console.log(myCar);

// Union type

type IdTpye = string | number;

let customerId : IdTpye = '456789';
customerId = 456;


// Literal Union (gerçek)

type status = 'pending' | 'upgrading' | 'complated';

let currentStatus : status = "upgrading";

// Intersection

type Person = {
    name: string;
}

type WorkerPerson = {
    salary: number
}

type Developer = Person & WorkerPerson & {
    mainLanguage : string;
}

const dev: Developer = {
    mainLanguage: 'Turkish',
    name: 'Kerem',
    salary: 4000
}

console.log(dev);