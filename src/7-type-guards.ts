// Type Guards
function toUperCase(a: number | string | boolean): string {
  if (typeof a === "string") {
    return a.toUpperCase();
  }

  return a.toString();
}

type TickerTemplate = {
  market: string;
  price: number;
};

function showTickerPrice(ticker?: TickerTemplate | null): number | undefined {
  if (ticker) {
    return ticker.price;
  }

  // return ticker?.price;
  // return ticker ? ticker.price: undefined;
  if (!ticker) {
    return;
  }
}

function log(date: Date | string) {
  if (date instanceof Date) {
    console.log(date.toUTCString());

    return;
  }

  console.log(date);
}

type Responce = {
  status: string;
  result: unknown;
};

function isTicker(entity: unknown): entity is Ticker {
  const ticker: Ticker = entity as Ticker;

  return (
    !!ticker &&
    typeof ticker.market === "string" &&
    typeof ticker.price === "number"
  );
}

const test1 = {
  a: 123,
  b: "str",
  c: 45,
  d: true,
} as const;

const test2: { a: number; b: string; c: number; d: boolean } = {
  a: 123,
  b: "str",
  c: 45,
  d: true,
} as const;

const test3 = {
  a: 123,
  b: "str",
  c: 45,
  d: true,
} as const satisfies { a: number; b: string; c: number; d: boolean };
