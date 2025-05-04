// Infer
type User = { a: number; b: string; c: number; d: boolean };

const testUser1 = {
  a: 123,
  b: "str",
  c: 45,
  d: true,
} as const satisfies User;
const testUser2: User = {
  a: 123,
  b: "str",
  c: 45,
  d: true,
};

const user = testUser1;

function calculate(a: number) {
  if (a > 0) {
    return;
  }

  if (a === 3) {
    return true;
  }

  if (a === 4) {
    return false;
  }

  return a;
}

function getProperty<Entity extends object, Propery extends keyof Entity>(
  entity: Entity,
  property: Propery
): Entity[Propery] {
  return entity[property];
}

function callFn1(callback: (...args: any[]) => any, ...args: any[]): any {
  return callback(...args);
}

function callFn2<Arguments extends unknown[], ReturnType>(
  callback: (...args: Arguments) => ReturnType,
  ...args: Arguments
): ReturnType {
  return callback(...args);
}

const callback = (
  a: boolean,
  b: string,
  c: number
): { a: number; b: string; c: { d: boolean } } => {
  return {
    a: c,
    b,
    c: { d: a },
  };
};

type MyReturnType<Func extends (...args: any[]) => unknown> = Func extends (
  ...args: string[]
) => infer Result
  ? Result
  : never;

type MyArguments<Func extends (...args: any[]) => unknown> = Func extends (
  ...args: infer Arguments
) => unknown
  ? Arguments
  : never;

type CallbackSignature = typeof callback;
type TestReturnType = MyReturnType<CallbackSignature>;
type TestArguments = MyArguments<CallbackSignature>;

type PromiseValue<Prom extends Promise<unknown>> = Prom extends Promise<
  infer PromiseValue
>
  ? PromiseValue
  : never;

const promise = new Promise<boolean>((resolve) => {
  resolve(true);
});

type TestPromise = PromiseValue<typeof promise>;
