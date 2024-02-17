

const text: string = "hello world";
const bool: boolean = true;
const num: number = 1;

let firstName = "Dylan";


let value: any = 123;
value = "Hello";
value = true;
value = null;


let unknown_: unknown = "Hello";
let newValue = unknown_ as string;


const names:  string[] = [];
names.push("Dylan");


let ourTuple: [number, boolean, string];
ourTuple = [5.324, false, 'Coding God was here'];



type Car = {
  type: string, 
  model: string, 
  year?: number,
}

const car: Car = {
  type: "Toyota",
  model: "Corolla",
}
// console.log(car.year);

type Dictionary = {
  [index: string]: string
}

const data: Dictionary = {
  data1: 'data1',
  data2: 'data2',
};


enum CardinalDirections {
  North="North",
  East="East",
  South="South",
  West="West",
}
// console.log(CardinalDirections.North, CardinalDirections.East, CardinalDirections.South, CardinalDirections.West);


interface Triangle {
  scale: number
}

interface Rectangle extends Triangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
  scale: 11,
};



const anyValue: string | number | boolean = 25;



function getTime(number1: number, str: string): string | number {
  return new Date().getTime();
}


function printHello(): void {
  console.log('Hello!');
}


let x: unknown = 'hello';
console.log((<string>x).length);


interface Person<T> {
  firstname: string,
  lastname: string,
  address: T
}

interface Address1 {
  city: string
  zip_code: number
}

interface Address2 {
  municipality: string
  zip_code: number
}

const person: Person<Address2 | Address1> = {
  firstname: 'John',
  lastname: 'Doe',
  address: {
    city: 'Davao',
    municipality: 'Davao',
    zip_code: 8000,
  }
}





