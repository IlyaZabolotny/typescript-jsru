// Any
let anyValue: any = "ts";
anyValue = null;
anyValue = function () {};
anyValue.a;
anyValue.get();

// Unknown - better to use for response data, used in catch block
let unknownValue: unknown = { a: "value1" };
unknownValue = 123;
unknownValue = { b: 1 };

// Never - unachievable code

// Literal types
let fontWeight: "bold" = "bold";
let fontWeight1: 600 = 600;

// Union type
let fontWeight2: 500 | 600 | 700 | "bold" = 500;

let numberOrString: number | string = 123;

function getPropertyUnionFn(
  obj: { a: String; d: string } | { b: Boolean; d: string }
) {
  obj.d;
}

// Intersection type
let testVar: { a: string } & { b: string } = {
  a: "str1",
  b: "str2",
};
