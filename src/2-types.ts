// Any
let anyVar: any = "ts";
anyVar = null;
anyVar = function () {};
anyVar.a;
anyVar.get();

// Unknown - best practice
let unknownVar: unknown = { a: "" };
unknownVar = 123;
unknownVar = { b: 1 };

// Never - an empty set

// Literal types
let fontWeight: "bold" = "bold";
let fontWeight1: 600 = 600;

// Union type
let fontWeight2: 500 | 600 | 700 | "bold" = 500;

let numberOrString: number | string = 123;

function getProperty(
  obj: { a: String; d: string } | { b: Boolean; d: string }
) {
  obj.d;
}

// Intersection type
let testVar: { a: string } & { b: string } = {
  a: "str1",
  b: "str2",
};
