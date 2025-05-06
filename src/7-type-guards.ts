// Type Guards
function toUperCase(a: number | string | boolean): string {
  if (typeof a === "string") {
    return a.toUpperCase();
  }

  return a.toString();
}
``;

type ComponentTemplate = {
  name: string;
  elements: string[];
};

function showComponentTemplate(
  component?: ComponentTemplate | null
): string[] | undefined {
  if (component) {
    return component.elements;
  }

  // return ticker?.price;
  // return ticker ? ticker.price: undefined;
  if (!component) {
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

function isTicker(entity: unknown): entity is Component {
  const component: Component = entity as Component;

  return (
    !!component &&
    typeof component.name === "string" &&
    Array.isArray(component.elements)
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
