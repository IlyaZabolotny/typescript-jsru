// Boolean
let isTrue: boolean = true;
let isTrueDec: boolean;
isTrue = false;
isTrue = Boolean(1);

// Number
let num: number = 1;
num = 0;
num = 12345;
num = Number.POSITIVE_INFINITY;
num = Number.MIN_SAFE_INTEGER;
num = Number.MAX_SAFE_INTEGER;
let float = 13.9;
let binary = 0b111111;

// Bigint
let bigNumber: bigint = 106n;

// String
let str:string = 'typescript';

// Symbol
let symbol:Symbol = Symbol(1);

// Null/Undefined
let nullVar: null = null;
let undefinedVar: undefined = undefined;

// Object
let objectVar: {readonly a: string, b: number, c: {d: boolean}} = {
    a: 'str',
    b: 123,
    c: {d: true}
};

// Array
let arrayVar: Array<number> = [];
let twoDimVar: (string[])[] = [['str1', 'str2']];

// Tuple
let tuple: [string, number, {a: boolean}] = ['str', 123, {a: true}];

// Function
function calculate(a: number = 0, b?: number): number {
    return Number(b) + a;
}