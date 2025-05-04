// Conditional types
type IdLable = {
  id: number;
};

type NameLable = {
  name: string;
};

type NameOrId<Value extends string | number> = Value extends number
  ? IdLable
  : NameLable;

function createLable<Value extends string | number>(
  value: Value
): NameOrId<Value> {
  throw new Error();
}

const idLable = createLable<number>(123);
const nameLable = createLable<string>("Ilya");
const idLable1 = createLable(123);
const nameLable1 = createLable("Ilya");
