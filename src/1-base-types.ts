// Boolean
let isTrue: boolean = true;
let isTrueDec: boolean;
isTrue = false;
isTrue = Boolean(1);

// Number
let num: number = 1;
num = 0;
num = 1;
num = Number.POSITIVE_INFINITY;
num = Number.MIN_SAFE_INTEGER;
num = Number.MAX_SAFE_INTEGER;
let float = 13.2;
let binary = 0b111111;

// Bigint
let bigNumber: bigint = 106n;

// String
let str: string = "typescript";

// Symbol
let symbol: Symbol = Symbol(1);

// Null/Undefined
let emptyValue: null = null;
let undefinedValue: undefined = undefined;

// Object
let object: { readonly a: string; b: number; c: { d: boolean } } = {
  a: "str",
  b: 123,
  c: { d: true },
};

// Array
let array: Array<number> = [];
let twoDim: string[][] = [["str1", "str2"]];

// Tuple
let tuple: [string, number, { a: boolean }] = ["str", 123, { a: true }];

// Function - default value, optional parameter
function calculateParameters(a: number = 0, b?: number): number | null {
  if (b) {
    return a + b;
  }
  return null;
}
